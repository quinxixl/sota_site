import { Router } from "express";
import { prisma } from "../utils/prisma";


const router = Router()

router.get('/', async (req, res) => {
    try {
        const cases = await prisma.case.findMany();
        res.json(cases)
    } catch (error) {
        console.log(error)
        res.status(500).json({error : "Can't fetching cases"})
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const uniqueCase = await prisma.case.findUnique({
            where: {id: parseInt(id)}
        })

        if (!uniqueCase) {
            return res.status(404).json({error : "Case not found"})
        }
        res.json(uniqueCase);
    } catch (error) {
        console.log(error)        
        res.status(500).json({error: "Cant fetch case"})
    }
})

router.post('/', async (req, res) => {
    const {logo_url, design_url} = req.body
    if (req.statusCode === 400) {
        console.log(logo_url, design_url)

    }

    try {
        const newCase = await prisma.case.create({
            data : {
                logo_url: logo_url,
                design_url: design_url,
            }
        })
        res.status(201).json(newCase)
    } catch (error) {
        console.log(error)
        res.status(500).json({error : "Can't create case"})
    }

    if (!logo_url || !design_url) {
        return res.status(400).json({error : "Image url and case description required"})
    }
})

router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {logo_url, design_url} = req.body

    try {
        const updateCase = await prisma.case.update({
            where: {
                id: parseInt(id)
            },
            data: {
                ...(logo_url && { logo_url }),
                ...(design_url && { design_url })
            }
        })

        res.status(202).json(updateCase)
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Can't update case"})
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const deleteCase = await prisma.case.delete({
            where: {
                id: parseInt(id)
            }
        })
        res.status(204).json({text: "Successful delete case"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Can't delete case"})
    }
})

export default router
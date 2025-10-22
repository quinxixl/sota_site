import {Router} from "express";
import {ADMIN_ID, BOT_TOKEN} from "../config";
import {prisma} from "../utils/prisma";
import {Bot} from "grammy";

const router = Router();
const bot = new Bot(BOT_TOKEN);

router.post("/", async (req, res) => {
    try {
        const applicationData = req.body;

        const message = `
        Новая заявка!
        
        Описание задачи:
        ${applicationData.task_description}
        
        Контактные данные клиента:
        - ФИО: ${applicationData.fullname}
        - Название компании: ${applicationData.company_name}
        - Email: ${applicationData.email}
        - Номер телефона: ${applicationData.phone_number}
        - URL: ${applicationData.site_url}
        `

        try {
            await Promise.all(
                ADMIN_ID.map(async (id: number) => {
                    await bot.api.sendMessage(id, message)
                })
            )
        } catch (error) {
            console.error(error)
        }

        await prisma.application.create({
            data: {
                task_description: applicationData.task_description,
                contacts: {
                    create: {
                        fullname: applicationData.fullname,
                        company_name: applicationData.company_name,
                        email: applicationData.email,
                        phone_number: applicationData.phone_number,
                        site_url: applicationData.site_url
                    }
                }
            }
        }).catch(err => console.log(err));

        res.status(200).json({success:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "server error"});
    }
})

export default router;
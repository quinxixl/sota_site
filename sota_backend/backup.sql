--
-- PostgreSQL database dump
--

\restrict 882u6GomktkLQyn3gUFwzVpV2Ug7NFePcYYTcZCd8OTs6JaTeffL9cTOToRfv0T

-- Dumped from database version 14.19 (Homebrew)
-- Dumped by pg_dump version 14.19 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _ApplicationToContact; Type: TABLE; Schema: public; Owner: quinx
--

CREATE TABLE public."_ApplicationToContact" (
    "A" integer NOT NULL,
    "B" integer NOT NULL
);


ALTER TABLE public."_ApplicationToContact" OWNER TO quinx;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: quinx
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO quinx;

--
-- Name: applications; Type: TABLE; Schema: public; Owner: quinx
--

CREATE TABLE public.applications (
    id integer NOT NULL,
    task_description text NOT NULL
);


ALTER TABLE public.applications OWNER TO quinx;

--
-- Name: applications_id_seq; Type: SEQUENCE; Schema: public; Owner: quinx
--

CREATE SEQUENCE public.applications_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.applications_id_seq OWNER TO quinx;

--
-- Name: applications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: quinx
--

ALTER SEQUENCE public.applications_id_seq OWNED BY public.applications.id;


--
-- Name: cases; Type: TABLE; Schema: public; Owner: quinx
--

CREATE TABLE public.cases (
    id integer NOT NULL,
    logo_url text NOT NULL,
    design_url text NOT NULL
);


ALTER TABLE public.cases OWNER TO quinx;

--
-- Name: cases_id_seq; Type: SEQUENCE; Schema: public; Owner: quinx
--

CREATE SEQUENCE public.cases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cases_id_seq OWNER TO quinx;

--
-- Name: cases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: quinx
--

ALTER SEQUENCE public.cases_id_seq OWNED BY public.cases.id;


--
-- Name: contacts; Type: TABLE; Schema: public; Owner: quinx
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    fullname text NOT NULL,
    company_name text NOT NULL,
    email text NOT NULL,
    phone_number text NOT NULL,
    site_url text NOT NULL
);


ALTER TABLE public.contacts OWNER TO quinx;

--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: quinx
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacts_id_seq OWNER TO quinx;

--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: quinx
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- Name: applications id; Type: DEFAULT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public.applications ALTER COLUMN id SET DEFAULT nextval('public.applications_id_seq'::regclass);


--
-- Name: cases id; Type: DEFAULT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public.cases ALTER COLUMN id SET DEFAULT nextval('public.cases_id_seq'::regclass);


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- Data for Name: _ApplicationToContact; Type: TABLE DATA; Schema: public; Owner: quinx
--

COPY public."_ApplicationToContact" ("A", "B") FROM stdin;
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: quinx
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
b3174d09-220e-4d4b-8fb1-c7afbdd8213c	f21c2c4a906ee1981ffa4712b4637af66681fb604fb50e6fa47c1aa8916ce531	2025-10-21 12:10:50.460485+03	20251021074642_update_case_model	\N	\N	2025-10-21 12:10:50.457018+03	1
0fd34938-03ca-4fe5-814a-8fc138877da3	0f72e003ced18f7e14e31afbccad2d8b250d1a610b9de83b11ab9fd2fd32d37a	2025-10-21 12:11:03.90254+03	20251021091103_add_applications	\N	\N	2025-10-21 12:11:03.896937+03	1
\.


--
-- Data for Name: applications; Type: TABLE DATA; Schema: public; Owner: quinx
--

COPY public.applications (id, task_description) FROM stdin;
\.


--
-- Data for Name: cases; Type: TABLE DATA; Schema: public; Owner: quinx
--

COPY public.cases (id, logo_url, design_url) FROM stdin;
1	http://localhost:3000/img/logo_joys.svg	http://localhost:3000/img/design_joyce.png
2	http://localhost:3000/img/logo_coffee.svg	http://localhost:3000/img/design_coffee.svg
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: quinx
--

COPY public.contacts (id, fullname, company_name, email, phone_number, site_url) FROM stdin;
\.


--
-- Name: applications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: quinx
--

SELECT pg_catalog.setval('public.applications_id_seq', 1, false);


--
-- Name: cases_id_seq; Type: SEQUENCE SET; Schema: public; Owner: quinx
--

SELECT pg_catalog.setval('public.cases_id_seq', 2, true);


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: quinx
--

SELECT pg_catalog.setval('public.contacts_id_seq', 1, false);


--
-- Name: _ApplicationToContact _ApplicationToContact_AB_pkey; Type: CONSTRAINT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public."_ApplicationToContact"
    ADD CONSTRAINT "_ApplicationToContact_AB_pkey" PRIMARY KEY ("A", "B");


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: applications applications_pkey; Type: CONSTRAINT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public.applications
    ADD CONSTRAINT applications_pkey PRIMARY KEY (id);


--
-- Name: cases cases_pkey; Type: CONSTRAINT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public.cases
    ADD CONSTRAINT cases_pkey PRIMARY KEY (id);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: _ApplicationToContact_B_index; Type: INDEX; Schema: public; Owner: quinx
--

CREATE INDEX "_ApplicationToContact_B_index" ON public."_ApplicationToContact" USING btree ("B");


--
-- Name: _ApplicationToContact _ApplicationToContact_A_fkey; Type: FK CONSTRAINT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public."_ApplicationToContact"
    ADD CONSTRAINT "_ApplicationToContact_A_fkey" FOREIGN KEY ("A") REFERENCES public.applications(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: _ApplicationToContact _ApplicationToContact_B_fkey; Type: FK CONSTRAINT; Schema: public; Owner: quinx
--

ALTER TABLE ONLY public."_ApplicationToContact"
    ADD CONSTRAINT "_ApplicationToContact_B_fkey" FOREIGN KEY ("B") REFERENCES public.contacts(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

\unrestrict 882u6GomktkLQyn3gUFwzVpV2Ug7NFePcYYTcZCd8OTs6JaTeffL9cTOToRfv0T


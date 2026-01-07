'use client';

import { useState } from 'react';
import ExpandableProjectCard from './ExpandableProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Importera Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Project } from './project-types';

const projectsData: Project[] = [
    {
        title: 'C# .NET Web API',
        description:
            'En robust backend-applikation byggd med .NET 6, Entity Framework Core och SQL Server.',
        longDescription:
            'Detta projekt var en djupdykning i .NET-ekosystemet för att bygga ett skalbart och säkert RESTful API. Det inkluderar JWT-autentisering, repository pattern och datahantering med Entity Framework Core mot en SQL Server-databas. Projektet demonstrerar best practices för backend-utveckling med fokus på säkerhet, prestanda och underhållbarhet.',
        imageUrl: 'https://placehold.co/600x400/1f2937/9ca3af?text=C%23+.NET+Web+API',
        tags: ['C#', '.NET 6', 'Entity Framework', 'SQL Server', 'REST API', 'JWT'],
        githubUrl: 'https://github.com/MikaelDaskalou/mitt-api-repo',
    },
    {
        title: 'React E-handel',
        description:
            'En frontend för en e-handel byggd i React och TypeScript, som kommunicerar med ett externt API.',
        longDescription:
            'En fullt fungerande e-handels-frontend med produktlistning, varukorg och en simulerad kassaprocess. Byggd med React, TypeScript och Tailwind CSS för att skapa en modern och responsiv användarupplevelse. All state hanteras med React Context och applikationen följer moderna designprinciper med fokus på användarvänlighet och tillgänglighet.',
        imageUrl: 'https://placehold.co/600x400/1f2937/9ca3af?text=React+E-handel',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Context API', 'Frontend'],
        githubUrl: 'https://github.com/MikaelDaskalou/min-ehandel-repo',
        liveUrl: 'https://min-ehandel-demo.com',
    },
    {
        title: 'Portfolio (Denna sida)',
        description:
            'Min personliga portfolio, byggd från grunden med Next.js, React och Tailwind CSS.',
        longDescription:
            'Sidan du tittar på just nu. Byggd för att visa upp mina färdigheter inom modern frontend-utveckling med Next.js för prestanda och SEO, Tailwind CSS för snabb och flexibel styling, och Framer Motion för smidiga animationer. Koden är fullt typad med TypeScript och följer moderna best practices. Swiper används för en smidig projektvisning och hela sidan är optimerad för alla enheter.',
        imageUrl: 'https://placehold.co/600x400/1f2937/9ca3af?text=Min+Portfolio',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Swiper'],
        githubUrl: 'https://github.com/MikaelDaskalou/mikaels-portfolio',
    },
];

export default function ProjectSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    const handleToggle = (index: number) => {
        // Om samma kort klickas igen, stäng det
        if (expandedIndex === index) {
            setExpandedIndex(null);
            // Återaktivera autoplay
            if (swiperInstance) {
                swiperInstance.autoplay.start();
            }
        } else {
            setExpandedIndex(index);
            // Pausa autoplay när ett kort expanderas
            if (swiperInstance) {
                swiperInstance.autoplay.stop();
            }
        }
    };

    return (
        <section id="projekt" className="bg-gray-950 py-24 text-white">
            <div className="container mx-auto max-w-6xl px-6">
                {/* Titel */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Mina Projekt
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        En samling av projekt som visar mina färdigheter inom fullstack-utveckling
                    </p>
                </div>

                {/* Swiper med expanderande kort */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        dynamicBullets: false,
                        renderBullet: (index, className) => {
                            return `<span class="${className}" style="
                                width: 12px; 
                                height: 12px; 
                                background: rgb(79, 70, 229);
                                opacity: 0.3;
                                transition: all 0.3s ease;
                                margin: 0 6px;
                            "></span>`;
                        },
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: expandedIndex !== null ? 1 : 2,
                        }
                    }}
                    onSwiper={setSwiperInstance}
                    className="pb-70 [&_.swiper-pagination]:!bottom-0 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:!scale-125 [&_.swiper-pagination-bullet]:hover:!opacity-70"
                >
                    {projectsData.map((project, index) => (
                        <SwiperSlide key={project.title}>
                            <ExpandableProjectCard
                                title={project.title}
                                description={project.description}
                                longDescription={project.longDescription}
                                imageUrl={project.imageUrl}
                                tags={project.tags}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                                isExpanded={expandedIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
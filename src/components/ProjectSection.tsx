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
        title: 'Next.js, React och Tailwind CSS.NET ',
        description:
            'Mitt första officiella hemsida byggd med Next.js, React och Tailwind CSS.'+
        'Hemsidan är byggd för en dansskola och inkluderar anpassade sektioner för klasser, instruktörer och anmälningar.',
        longDescription:
            'Detta projekt var mitt första större försök att bygga en modern responsiv hemsida från grunden med Next.js och Tailwind CSS. ',
        imageUrl: '/Projekt1fuego.png',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'Frontend'],
        githubUrl: 'https://github.com/MDaskalou/FuegoDanceSchoolUpdated',
        liveUrl: 'https://fuegodanceschool.se',
    },
    {
        title: 'Hemsida för StudieTeknik',
        description:
            'Detta är en hemsida för en studieplattform som hjälper studenter att förbättra sina studietekniker.'+
        'Byggd med C# .Net för backend och Next.js för frontend med Tailwind CSS för styling samt SQL databas.',
        longDescription:
            'Detta är ett fullstack-projekt där jag byggde både backend och frontend. Backend är utvecklad med C# .Net och hanterar användarautentisering, ' +
            'kursdata och AI-integration för att hjälpa elever att hjälpa eleverna att strukturera och effektivisera sina studier . ' +
            'Frontend är byggd med Next.js och Tailwind CSS för att skapa en snabb och responsiv användarupplevelse.',
        imageUrl: '/Projekt2StudieTeknik.png',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'API', 'Frontend', 'C# .NET', 'SQL', 'Backend', 'AI-Integration'],
        githubUrl: 'https://github.com/MDaskalou/StudyTeknikBE',
        videoUrl: 'https://res.cloudinary.com/dkjexjisq/video/upload/v1767835604/Sk%C3%A4rminspelning_2025-12-25_140331_r7zho1.mp4',

    },
    {
        title: 'Portfolio (Denna sida)',
        description:
            'Min personliga portfolio, byggd från grunden med Next.js, React och Tailwind CSS.',
        longDescription:
            'Sidan du tittar på just nu. Byggd för att visa upp mina färdigheter inom modern frontend-utveckling med Next.js för prestanda och SEO, Tailwind CSS för snabb och flexibel styling, och Framer Motion för smidiga animationer. Koden är fullt typad med TypeScript och följer moderna best practices. Swiper används för en smidig projektvisning och hela sidan är optimerad för alla enheter.',
        imageUrl: '/Projekt3Portfolio.jpg',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Swiper'],
        githubUrl: 'https://github.com/MDaskalou/MyNewPortfoliov2',
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
                    // HÄR ÄR ÄNDRINGARNA:
                    // 1. pb-16 ger lagom utrymme under korten
                    // 2. !-bottom-2 flyttar ner prickarna ytterligare från kortens kant
                    className="pb-16 overflow-visible [&_.swiper-pagination]:!bottom-[-10px] [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:!scale-125 [&_.swiper-pagination-bullet]:hover:!opacity-70"
                >
                    {projectsData.map((project, index) => (
                        <SwiperSlide key={project.title} className="pb-4">
                            <ExpandableProjectCard
                                title={project.title}
                                description={project.description}
                                longDescription={project.longDescription}
                                imageUrl={project.imageUrl}
                                tags={project.tags}
                                githubUrl={project.githubUrl}
                                liveUrl={project.liveUrl}
                                videoUrl={project.videoUrl}
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
'use client';

import { useState } from 'react';
import ExpandableProjectCard from './ExpandableProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useProjectsTranslation } from '@/context/TranslationContext';

// Importera Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Static project data (URLs and tags don't need translation)
const projectStaticData = [
    {
        imageUrl: '/Projekt1fuego.png',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'Frontend'],
        githubUrl: 'https://github.com/MDaskalou/FuegoDanceSchoolUpdated',
        liveUrl: 'https://fuegodanceschool.se',
    },
    {
        imageUrl: '/Projekt2StudieTeknik.png',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'API', 'Frontend', 'C# .NET', 'SQL', 'Backend', 'AI-Integration'],
        githubUrl: 'https://github.com/MDaskalou/StudyTeknikBE',
        videoUrl: 'https://res.cloudinary.com/dkjexjisq/video/upload/v1767835604/Sk%C3%A4rminspelning_2025-12-25_140331_r7zho1.mp4',
    },
    {
        imageUrl: '/Projekt3Portfolio.jpg',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Swiper'],
        githubUrl: 'https://github.com/MDaskalou/MyNewPortfoliov2',
    },
];

export default function ProjectSection() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const { t } = useProjectsTranslation();

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

    // Combine translated content with static data
    const projectsData = t.items.map((item: { title: string; description: string; longDescription: string }, index: number) => ({
        ...item,
        ...projectStaticData[index],
    }));

    return (
        <section id="projekt" className="bg-gray-950 py-24 text-white">
            <div className="container mx-auto max-w-6xl px-6">
                {/* Titel */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {t.title}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t.subtitle}
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
                    className="pb-16 overflow-visible [&_.swiper-pagination]:!bottom-[-10px] [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet-active]:!scale-125 [&_.swiper-pagination-bullet]:hover:!opacity-70"
                >
                    {projectsData.map((project: { title: string; description: string; longDescription: string; imageUrl: string; tags: string[]; githubUrl: string; liveUrl?: string; videoUrl?: string }, index: number) => (
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
import { TechStackTag } from "./techStackTag";
import React from 'react';
import Link from 'next/link'

export type Tag = {
    tagText: string
}

export type Props = {
    link: string,
    title: string,
    date: string,
    description: string,
    classProject?: boolean,
    tags: string[]
};

function ProjectBlock({link, title, date, description, classProject = false, tags}: Props){
    return (
        <Link href={link} target="_blank" passHref={true}>
            <div className="p-6 pl-8 rounded-lg hover:!opacity-100 lg:group-hover:opacity-50 group transition-all hover:border-gray-500 border-2 border-transparent grid md:grid-cols-8">
                <div className="hidden col-span-2 m-2 text-sm font-semibold uppercase md:block">
                    {date}
                </div>
                <div className="col-span-6 col-start-1 md:col-start-3 grid-cols-subgrid">
                    <div className="text-2xl font-medium">
                        {title}
                    </div>
                    <div className="mt-3 tracking-wider text-md text-slate-200">
                        {description}
                    </div>
                    <div className="flex flex-row flex-wrap mt-2 mb-1.5">
                        {classProject && <TechStackTag color="green" text="Class Project"/>}

                        {tags.map((tagText, index) => (
                            <TechStackTag key={tagText+index} text={tagText}/>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectBlock;
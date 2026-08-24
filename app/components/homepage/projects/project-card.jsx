// @flow strict

import Link from 'next/link';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute left-4 lg:left-8 top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        {project.website ? (
          <Link
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="block pl-8 text-center text-[#16f2b3] text-base lg:text-xl hover:underline"
          >
            {project.name}
          </Link>
        ) : (
          <p className="pl-8 text-center text-[#16f2b3] text-base lg:text-xl">
            {project.name}
          </p>
        )}
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-5 lg:py-7">
        <p className="text-[#d3d8e8] text-sm md:text-base leading-relaxed text-justify">
          {project.description}
        </p>
        <p className="mt-4 text-xs uppercase tracking-wider text-[#16f2b3]">Rol</p>
        <p className="text-white text-sm md:text-base">{project.role}</p>

        <p className="mt-4 text-xs uppercase tracking-wider text-[#16f2b3]">Tecnologias</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tools.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#25315f] bg-[#11152c] px-3 py-1 text-xs text-[#e6ecff]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
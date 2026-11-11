import React from 'react';

// Template 3: Minimal Black-and-White ATS-Friendly Layout (Experiment 1 - Conditional Rendering)
const MinimalTemplate = ({ data }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
  } = data || {};

  return (
    <div className="w-full bg-white text-black p-8 sm:p-10 font-sans text-xs leading-relaxed shadow-sm">
      {/* Header */}
      <div className="mb-5 pb-3 border-b border-black">
        <h1 className="text-2xl font-bold tracking-tight text-black uppercase">
          {personalInfo.fullName || 'YOUR NAME'}
        </h1>

        <div className="mt-1 flex flex-wrap gap-x-3 text-[11px] text-neutral-800">
          {personalInfo.email && <span>Email: {personalInfo.email}</span>}
          {personalInfo.phone && <span>| Phone: {personalInfo.phone}</span>}
          {personalInfo.location && <span>| Location: {personalInfo.location}</span>}
          {personalInfo.linkedin && <span>| LinkedIn: {personalInfo.linkedin}</span>}
          {personalInfo.github && <span>| GitHub: {personalInfo.github}</span>}
        </div>

        {personalInfo.summary && (
          <p className="mt-2 text-neutral-700 leading-normal">
            {personalInfo.summary}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-neutral-300 pb-0.5 mb-1.5">
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-semibold">{edu.college}</span>
                    <span className="text-neutral-700"> — {edu.degree} {edu.course && `in ${edu.course}`}</span>
                    {edu.grade && <span className="text-neutral-600 text-[10px]"> (CGPA: {edu.grade})</span>}
                  </div>
                  <span className="text-neutral-600 text-[11px]">
                    {edu.startYear} – {edu.endYear || 'Present'}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-neutral-300 pb-0.5 mb-1.5">
              Experience
            </h2>
            <div className="space-y-2.5">
              {experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between font-semibold">
                    <span>{exp.role} — <span className="font-normal">{exp.company}</span></span>
                    <span className="font-normal text-neutral-600 text-[11px]">{exp.duration}</span>
                  </div>
                  {exp.description && (
                    <p className="text-neutral-700 mt-0.5 leading-normal">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-neutral-300 pb-0.5 mb-1.5">
              Projects
            </h2>
            <div className="space-y-2">
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <div className="flex justify-between">
                    <span className="font-semibold">{proj.title}</span>
                    {proj.link && <span className="text-neutral-600 text-[10px]">{proj.link}</span>}
                  </div>
                  {proj.technologies && (
                    <p className="text-neutral-600 text-[10px]">Technologies: {proj.technologies}</p>
                  )}
                  {proj.description && (
                    <p className="text-neutral-700 mt-0.5 leading-normal">{proj.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-neutral-300 pb-0.5 mb-1.5">
              Skills
            </h2>
            <p className="text-neutral-800">
              {skills.join(', ')}
            </p>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-black border-b border-neutral-300 pb-0.5 mb-1.5">
              Certifications
            </h2>
            <div className="space-y-1">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>
                    <strong className="font-semibold">{cert.name}</strong>, {cert.organization}
                  </span>
                  {cert.year && <span className="text-neutral-600 text-[11px]">{cert.year}</span>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate;

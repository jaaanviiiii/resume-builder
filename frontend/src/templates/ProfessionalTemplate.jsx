import React from 'react';

// Template 2: Professional Classic Layout (Experiment 1 - Props & Array.map)
const ProfessionalTemplate = ({ data }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
  } = data || {};

  return (
    <div className="w-full bg-white text-gray-900 p-8 sm:p-10 font-serif leading-normal text-sm shadow-sm">
      {/* Header - Traditional Centered Formal Layout */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-gray-900">
          {personalInfo.fullName || 'Your Full Name'}
        </h1>

        <div className="mt-2 flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs text-gray-700 font-sans">
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.phone && personalInfo.email && <span>•</span>}
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.linkedin && <span>•</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          {personalInfo.github && <span>•</span>}
          {personalInfo.github && <span>{personalInfo.github}</span>}
        </div>

        {personalInfo.summary && (
          <p className="mt-3 text-xs sm:text-sm text-gray-700 max-w-2xl mx-auto italic font-serif leading-relaxed">
            "{personalInfo.summary}"
          </p>
        )}
      </div>

      <div className="space-y-5">
        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-400 pb-1 mb-2 font-sans">
              Professional Experience
            </h2>
            <div className="space-y-3">
              {experience.map((exp, index) => (
                <div key={index} className="text-xs">
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>{exp.company}</span>
                    <span className="font-normal text-gray-600 font-sans">{exp.duration}</span>
                  </div>
                  <div className="italic text-gray-800 mb-1">{exp.role}</div>
                  {exp.description && (
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed font-sans text-xs">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-400 pb-1 mb-2 font-sans">
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu, index) => (
                <div key={index} className="text-xs">
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>{edu.college}</span>
                    <span className="font-normal text-gray-600 font-sans">
                      {edu.startYear} - {edu.endYear || 'Present'}
                    </span>
                  </div>
                  <div className="text-gray-800 italic">
                    {edu.degree} {edu.course ? `in ${edu.course}` : ''}
                    {edu.grade && <span className="font-sans font-normal text-gray-600 ml-2">({edu.grade})</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-400 pb-1 mb-2 font-sans">
              Key Projects
            </h2>
            <div className="space-y-3">
              {projects.map((proj, index) => (
                <div key={index} className="text-xs">
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>{proj.title}</span>
                    {proj.link && (
                      <span className="font-normal font-sans text-gray-600 text-[11px]">
                        {proj.link}
                      </span>
                    )}
                  </div>
                  {proj.technologies && (
                    <p className="text-[11px] font-sans text-gray-700 italic">
                      Technologies: {proj.technologies}
                    </p>
                  )}
                  {proj.description && (
                    <p className="text-gray-700 font-sans mt-0.5 leading-relaxed text-xs">
                      {proj.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-400 pb-1 mb-2 font-sans">
              Technical & Professional Skills
            </h2>
            <p className="text-xs font-sans text-gray-800 leading-relaxed">
              {skills.join('  •  ')}
            </p>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-900 border-b border-gray-400 pb-1 mb-2 font-sans">
              Honors & Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs font-sans text-gray-800">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <span className="font-semibold">{cert.name}</span> – {cert.organization}
                  {cert.year ? ` (${cert.year})` : ''}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProfessionalTemplate;

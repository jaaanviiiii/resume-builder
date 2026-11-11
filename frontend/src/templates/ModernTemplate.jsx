import React from 'react';
import { Mail, Phone, MapPin, Globe, Calendar, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/Icons';

// Template 1: Modern Template with Violet/Purple SaaS Accents (Experiment 1 - Props & Nested Components)
const ModernTemplate = ({ data }) => {
  const {
    personalInfo = {},
    education = [],
    skills = [],
    projects = [],
    experience = [],
    certifications = [],
  } = data || {};

  return (
    <div className="w-full bg-white text-slate-800 p-8 sm:p-10 font-sans shadow-sm leading-relaxed text-sm">
      {/* Top Header */}
      <header className="border-b-2 border-brand-500 pb-5 mb-6">
        <h1 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight">
          {personalInfo.fullName || 'Your Full Name'}
        </h1>
        {personalInfo.summary && (
          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {personalInfo.summary}
          </p>
        )}

        {/* Contact Info Pills */}
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-600">
          {personalInfo.email && (
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-600" />
              <span>{personalInfo.email}</span>
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>{personalInfo.phone}</span>
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-600" />
              <span>{personalInfo.location}</span>
            </span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1.5">
              <LinkedinIcon className="w-3.5 h-3.5 text-brand-600" />
              <span>{personalInfo.linkedin}</span>
            </span>
          )}
          {personalInfo.github && (
            <span className="flex items-center gap-1.5">
              <GithubIcon className="w-3.5 h-3.5 text-brand-600" />
              <span>{personalInfo.github}</span>
            </span>
          )}
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="space-y-6">
        {/* Experience Section */}
        {experience.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-brand-600" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-700">
                Work Experience
              </h2>
              <div className="flex-1 h-px bg-brand-100"></div>
            </div>
            <div className="space-y-3">
              {experience.map((exp, index) => (
                <div key={index} className="text-xs">
                  <div className="flex justify-between items-baseline font-semibold text-slate-800">
                    <span className="text-slate-900 font-bold">{exp.role || 'Job Role'}</span>
                    <span className="text-slate-500 font-normal">{exp.duration}</span>
                  </div>
                  <div className="text-brand-600 font-medium mb-1">{exp.company}</div>
                  {exp.description && (
                    <p className="text-slate-600 text-xs whitespace-pre-line leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Code className="w-4 h-4 text-brand-600" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-700">
                Key Projects
              </h2>
              <div className="flex-1 h-px bg-brand-100"></div>
            </div>
            <div className="space-y-3">
              {projects.map((proj, index) => (
                <div key={index} className="text-xs">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-slate-900">{proj.title || 'Project Title'}</span>
                    {proj.link && (
                      <span className="text-brand-600 text-[11px] underline truncate max-w-[200px]">
                        {proj.link}
                      </span>
                    )}
                  </div>
                  {proj.technologies && (
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                      Tech: <span className="text-brand-700">{proj.technologies}</span>
                    </div>
                  )}
                  {proj.description && (
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      {proj.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-brand-600" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-700">
                Education
              </h2>
              <div className="flex-1 h-px bg-brand-100"></div>
            </div>
            <div className="space-y-3">
              {education.map((edu, index) => (
                <div key={index} className="text-xs flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {edu.degree} {edu.course ? `in ${edu.course}` : ''}
                    </h3>
                    <p className="text-brand-600 font-medium">{edu.college}</p>
                    {edu.grade && <p className="text-slate-500 text-[11px]">Grade / CGPA: {edu.grade}</p>}
                  </div>
                  <span className="text-slate-500 text-[11px] whitespace-nowrap">
                    {edu.startYear} - {edu.endYear || 'Present'}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-700">
                Skills & Technologies
              </h2>
              <div className="flex-1 h-px bg-brand-100"></div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 text-xs font-medium bg-brand-50 text-brand-700 rounded-md border border-brand-200/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {certifications.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-brand-600" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-brand-700">
                Certifications
              </h2>
              <div className="flex-1 h-px bg-brand-100"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certifications.map((cert, index) => (
                <div key={index} className="p-2 bg-slate-50 rounded border border-slate-100">
                  <p className="font-semibold text-slate-900">{cert.name}</p>
                  <p className="text-[11px] text-slate-500">
                    {cert.organization} {cert.year ? `• ${cert.year}` : ''}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;

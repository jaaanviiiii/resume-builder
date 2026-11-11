import React from 'react';
import { Plus, Trash2, Code, Link as LinkIcon } from 'lucide-react';

// Form Section for Key Projects (Experiment 1 & 2 - Dynamic Array of Objects)
const ProjectsForm = ({ projects = [], onChange }) => {
  const handleAdd = () => {
    onChange([
      ...projects,
      {
        title: '',
        description: '',
        technologies: '',
        link: '',
      },
    ]);
  };

  const handleRemove = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...projects];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {projects.length === 0 ? (
        <div className="text-center py-6 bg-slate-50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-500">
          No projects added yet. Click "+ Add Project" to highlight your work!
        </div>
      ) : (
        projects.map((proj, index) => (
          <div
            key={index}
            className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
              <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-brand-600" />
                Project #{index + 1}
              </span>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="text-xs text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
                title="Remove project"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Remove</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-slate-600 font-medium mb-1">Project Title</label>
                <input
                  type="text"
                  value={proj.title || ''}
                  onChange={(e) => handleChange(index, 'title', e.target.value)}
                  placeholder="e.g. ResumeForge Web App"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-medium mb-1">Project / GitHub Link</label>
                <div className="relative">
                  <LinkIcon className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    value={proj.link || ''}
                    onChange={(e) => handleChange(index, 'link', e.target.value)}
                    placeholder="e.g. github.com/username/project"
                    className="w-full pl-8 pr-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-600 font-medium mb-1">Technologies Used</label>
                <input
                  type="text"
                  value={proj.technologies || ''}
                  onChange={(e) => handleChange(index, 'technologies', e.target.value)}
                  placeholder="e.g. React.js, Express, MongoDB, Node.js, Tailwind CSS"
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-slate-600 font-medium mb-1">Description / Key Features</label>
                <textarea
                  rows={2}
                  value={proj.description || ''}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  placeholder="Briefly describe what the project does and your primary contribution..."
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 leading-relaxed"
                />
              </div>
            </div>
          </div>
        ))
      )}

      <button
        type="button"
        onClick={handleAdd}
        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors border border-brand-200"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default ProjectsForm;


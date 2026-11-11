import React, { useState } from 'react';
import { Plus, X, Tag } from 'lucide-react';

// Form Section for Dynamic Skills (Experiment 1 & 2 - Array.map & useState)
const SkillsForm = ({ skills = [], onChange }) => {
  const [skillInput, setSkillInput] = useState('');

  const handleAddSkill = (e) => {
    if (e) e.preventDefault();
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onChange([...skills, trimmed]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    onChange(skills.filter((skill) => skill !== skillToRemove));
  };

  const addQuickSkill = (skill) => {
    if (!skills.includes(skill)) {
      onChange([...skills, skill]);
    }
  };

  const quickSuggestions = [
    'JavaScript',
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Python',
    'Java',
    'SQL',
    'Tailwind CSS',
    'HTML & CSS',
    'Git & GitHub',
    'REST APIs',
  ];

  return (
    <div className="space-y-4">
      {/* Skill Input Form */}
      <form onSubmit={handleAddSkill} className="flex gap-2">
        <div className="relative flex-1">
          <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Type a skill (e.g. React.js, Python) and press Enter"
            className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 text-slate-800"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add</span>
        </button>
      </form>

      {/* Current Active Skills as Tags */}
      <div>
        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
          Your Skills ({skills.length})
        </label>
        {skills.length === 0 ? (
          <p className="text-xs text-slate-500 italic">No skills added yet.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-brand-50 text-brand-700 border border-brand-200/60"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-brand-400 hover:text-red-500 transition-colors"
                  title="Remove skill"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Quick Suggestions */}
      <div className="pt-2 border-t border-slate-100">
        <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
          Quick Suggestions (Click to Add):
        </label>
        <div className="flex flex-wrap gap-1.5">
          {quickSuggestions.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => addQuickSkill(s)}
              disabled={skills.includes(s)}
              className={`text-[11px] px-2.5 py-0.5 rounded-full border transition-colors ${
                skills.includes(s)
                  ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-brand-400 hover:text-brand-600'
              }`}
            >
              + {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;


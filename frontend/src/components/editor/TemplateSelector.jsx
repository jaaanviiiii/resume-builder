import React from 'react';
import { Layout, Check, Sparkles, Briefcase, FileText } from 'lucide-react';

// Template Selector Component (Experiment 1 & 2 - Props & Conditional Rendering)
const TemplateSelector = ({ selectedTemplate, onSelect }) => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern SaaS',
      description: 'Purple/violet accents, clean headers, skill pills',
      icon: Sparkles,
      color: 'border-brand-500 bg-brand-50/50 text-brand-700',
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Formal serif typography, centered header, traditional chronology',
      icon: Briefcase,
      color: 'border-slate-800 bg-slate-50 text-slate-800',
    },
    {
      id: 'minimal',
      name: 'Minimal ATS',
      description: 'High contrast black-and-white, optimal applicant tracking parsing',
      icon: FileText,
      color: 'border-neutral-900 bg-neutral-50 text-neutral-900',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {templates.map((tpl) => {
        const isSelected = selectedTemplate === tpl.id;
        const Icon = tpl.icon;

        return (
          <button
            key={tpl.id}
            type="button"
            onClick={() => onSelect(tpl.id)}
            className={`p-3.5 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
              isSelected
                ? `${tpl.color} ring-2 ring-brand-500/30 shadow-sm`
                : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex items-center gap-1.5 font-bold text-xs">
                  <Icon className="w-3.5 h-3.5" />
                  {tpl.name}
                </span>
                {isSelected && (
                  <div className="w-4 h-4 rounded-full bg-brand-600 text-white flex items-center justify-center">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                )}
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                {tpl.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default TemplateSelector;


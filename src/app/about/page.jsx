"use client";
import React, { useState } from 'react';

import { Database, Code2, BarChart3, GitBranch, Layers, Server } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const expertise = [
    {
      category: "Data Engineering & ETL",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Python", detail: "Pandas, NumPy, PySpark para processamento de grandes volumes" },
        { name: "SQL", detail: "MySQL, PostgreSQL, SQL Server - queries complexas e otimização" },
        { name: "ETL Pipelines", detail: "Power Query, SSIS, Airflow para automação de fluxos de dados" },
        { name: "Data Warehousing", detail: "Modelagem dimensional, star schema, data marts" }
      ]
    },
    {
      category: "Business Intelligence",
      icon: <BarChart3 className="w-5 h-5" />,
      skills: [
        { name: "Power BI", detail: "DAX avançado, data modeling, dashboards executivos" },
        { name: "Excel Avançado", detail: "VBA, Power Query, tabelas dinâmicas, análise de cenários" },
        { name: "Visualização", detail: "Matplotlib, Seaborn para análise exploratória" },
        { name: "KPIs & Métricas", detail: "Definição e monitoramento de indicadores estratégicos" }
      ]
    },
    {
      category: "Análise Fiscal & Tributária",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "SPED Fiscal", detail: "EFD ICMS/IPI, EFD Contribuições, validação e cruzamento" },
        { name: "Obrigações Acessórias", detail: "ECF, ECD, DCTF, Reinf, TTD 478" },
        { name: "Automação Fiscal", detail: "Scripts Python/SQL para validação e apuração" },
        { name: "Planejamento Tributário", detail: "Análise de cenários, otimização de carga tributária" }
      ]
    },
    {
      category: "Desenvolvimento & Integração",
      icon: <Code2 className="w-5 h-5" />,
      skills: [
        { name: "Python", detail: "Desenvolvimento de scripts e aplicações para análise de dados" },
        { name: "Go", detail: "Desenvolvimento de APIs e sistemas de alto desempenho" },
        { name: "Git/GitHub", detail: "Versionamento e colaboração em projetos de dados" },
        { name: "ERPs", detail: "Integração com Totvs Protheus, SAP Business One, Omie, Bling" }
      ]
    }
  ];

  const education = {
    "Data Science & Analytics": [
      "MBA em Tecnologia para Negócios: Data Science e Big Data (2026)",
      "MBA em Ciência de Dados e Analytics Avançados (2024)",
      "MBA em Data Warehouse e Business Intelligence (2025)",
      "Pós-Graduação em Big Data (2026)",
      "Pós-Graduação em Análise de Dados (2023)",
      "Pós-Graduação em Estatística Aplicada (2026)"
    ],
    "Engenharia de Dados": [
      "Pós-Graduação em Engenharia de Dados (2025)",
      "Building Data Engineering Pipelines with Python (2024)",
      "Big Data Analysis with PySpark (2023)",
      "Advanced SQL for Data Scientists (2020)",
      "Formação Linguagem Go (2025)"
    ],
    "Tributária & Fiscal": [
      "MBA em Gestão Tributária e Planejamento Fiscal (2024)",
      "MBA em Auditoria e Perícia Contábil (2023)",
      "Pós-Graduação em Direito Tributário Aplicado (2023)",
      "Pós-Graduação em Contabilidade Tributária (2022)",
      "Especialização em SPED e Obrigações Acessórias (2021)"
    ]
  };

  const professionalPath = [
    {
      period: "2005-2012",
      role: "Engenharia Naval & Mecânica",
      company: "UNIVALI",
      description: "Análise de dados estruturais utilizando Análise de Elementos Finitos (FEA). Desenvolvimento de modelos preditivos para avaliação de risco e falhas estruturais em projetos navais.",
      tech: ["FEA", "Análise Estatística", "Modelagem Preditiva"]
    },
    {
      period: "2011-2015",
      role: "Cientista de Dados & Pesquisador",
      company: "UNIVALI",
      description: "Coleta, processamento e análise de dados oceanográficos. Desenvolvimento de veículo oceanográfico para aquisição contínua de dados. Publicações científicas em análise de comunidades planctônicas.",
      tech: ["Python", "Análise Estatística", "Data Collection", "Visualização"]
    },
    {
      period: "2015-2023",
      role: "Analista de Dados Fiscais Sênior",
      company: "Excel Consultoria",
      description: "Desenvolvimento de sistemas ETL para processamento de dados fiscais. Automação de validação e apuração de impostos. Redução de 78% no tempo de apuração e 35% na carga tributária através de análise de dados e otimização de processos.",
      tech: ["SQL", "Python", "Power BI", "ETL", "SPED", "DAX"]
    },
    {
      period: "2023-2025",
      role: "COO & Analista de Dados",
      company: "CskinStore",
      description: "Estruturação de departamento fiscal e implementação de dashboards de BI. Redução da carga tributária de 18.5% para 12.3% através de análise de dados e otimização de processos. Análise de KPIs operacionais e financeiros.",
      tech: ["Power BI", "Python", "KPIs", "Análise Preditiva", "SQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Dyegho Cunha</h1>
              <p className="text-xl text-slate-600 mb-4">Especialista em Análise de Dados & Inteligência Fiscal</p>
              <div className="flex gap-4 text-sm text-slate-500">
                <span>Balneário Camboriú, SC</span>
                <span>•</span>
                <span>dyeghocunha@gmail.com</span>
                <span>•</span>
                <span>+55 47 99911-0554</span>
              </div>
            </div>
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/dyeghocunha" 
                 className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm hover:bg-slate-800 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/DyeghoCunha" 
                 className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-8">
            {['overview', 'expertise', 'experience', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-slate-900 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab === 'overview' && 'Visão Geral'}
                {tab === 'expertise' && 'Expertise Técnica'}
                {tab === 'experience' && 'Trajetória'}
                {tab === 'education' && 'Formação'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Sobre</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Especialista em Análise de Dados com trajetória multidisciplinar de mais de 10 anos, 
                  focado na transformação de dados complexos em insights estratégicos para otimização de 
                  processos e tomada de decisão baseada em evidências.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Minha experiência abrange desde análise de dados estruturais em Engenharia Naval, 
                  utilizando Análise de Elementos Finitos para modelos preditivos de falhas, até o 
                  processamento e análise estatística de dados oceanográficos, resultando em publicações 
                  científicas no <em>Latin American Journal of Aquatic Research</em>.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Como Analista de Dados Fiscais Sênior, desenvolvi soluções de ETL e automação que 
                  processaram grandes volumes de dados tributários, aplicando SQL, Python e ferramentas 
                  de Business Intelligence. Implementei processos que reduziram em <strong>78% o tempo de apuração 
                  de impostos</strong> e em <strong>35% a carga tributária</strong> através de análise estratégica de dados 
                  e otimização de créditos fiscais.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Na posição de COO, estruturei departamento fiscal e implementei dashboards de BI que 
                  permitiram redução da carga tributária efetiva de <strong>18.5% para 12.3%</strong>, além de 
                  análise contínua de KPIs operacionais e financeiros para suporte à decisão estratégica.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Áreas de Atuação</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Análise de Dados</h3>
                  <p className="text-sm text-slate-600">ETL, Data Warehousing, Análise Estatística, Modelagem Preditiva</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Business Intelligence</h3>
                  <p className="text-sm text-slate-600">Power BI, Dashboards, KPIs, Visualização de Dados</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Inteligência Fiscal</h3>
                  <p className="text-sm text-slate-600">SPED, Planejamento Tributário, Compliance, Auditoria Fiscal</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'expertise' && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Expertise Técnica</h2>
            {expertise.map((area, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{area.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {area.skills.map((skill, idx) => (
                    <div key={idx} className="border-l-2 border-slate-300 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-1">{skill.name}</h4>
                      <p className="text-sm text-slate-600">{skill.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Trajetória Profissional</h2>
            {professionalPath.map((job, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{job.role}</h3>
                    <p className="text-slate-600">{job.company}</p>
                  </div>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {job.period}
                  </span>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Formação Acadêmica & Certificações</h2>
            {Object.entries(education).map(([category, courses], index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{category}</h3>
                <ul className="space-y-2">
                  {courses.map((course, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-slate-400 mt-1">▹</span>
                      <span className="text-slate-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Graduações</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span className="text-slate-700">Engenharia de Software - Cursando (2025-2029)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span className="text-slate-700">Ciências Contábeis - Concluído (2020)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span className="text-slate-700">Mestrado em Ciência e Tecnologia Ambiental - Concluído (2015)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span className="text-slate-700">Ciências Biológicas - Concluído (2015)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span className="text-slate-700">Engenharia Industrial Mecânica - Concluído (2012)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-1">▹</span>
                  <span className="text-slate-700">Tecnologia em Construção Naval - Concluído (2009)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Publicações Científicas</h3>
              <ul className="space-y-3">
                <li className="text-sm text-slate-700">
                  Tamanaha, M. S., <strong>Cunha, D. M. C. G.</strong>, & Resgalla Jr, C. (2016). 
                  The first continuous plankton sampling by VOR (Towed Oceanographic Vehicle) in 
                  southeastern and southern Brazil waters. <em>Latin American Journal of Aquatic Research</em>, 44(5), 935-946.
                </li>
                <li className="text-sm text-slate-700">
                  <strong>Cunha, D. M. C. G.</strong>, & Resgalla Jr, C. (2016). 
                  Mechanical undulating towed vehicle for collection of oceanographic data. 
                  <em>Latin American Journal of Aquatic Research</em>, 44(5), 926-934.
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
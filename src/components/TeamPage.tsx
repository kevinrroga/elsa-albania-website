import { motion, easeOut } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { Mail } from 'lucide-react';

import placeholderImage from '@assets/elsa-logo-white.png';

const TeamPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  const teamData = [
    {
      category: t.boardRelations,
      members: [
        { id: 1, role: "Director for External Relations" },
        { id: 2, role: "Director for Expansions" }
      ]
    },
    {
      category: t.internalManagement,
      members: [
        { id: 3, role: "Assistant for Human Resources" }
      ]
    },
    {
      category: t.academicActivities,
      members: [
        { id: 4, role: "Assistant for Academic Activities" },
        { id: 5, role: "Assistant for Annual Human Rights Campaign" },
        { id: 6, role: "Assistant for Law Review and Legal Research Group" }
      ]
    },
    {
      category: t.competitions,
      members: [
        { id: 7, role: "Director for Moot Courts" },
        { id: 8, role: "Director for Moot Courts" },
        { id: 9, role: "Director for Academic Competitions" }
      ]
    },
    {
      category: t.professionalDevelopment,
      members: [
        { id: 10, role: "Director for Professional Development" }
      ]
    },
    {
      category: t.seminarsConferences,
      members: [
        { id: 11, role: "Director for Conferences" },
        { id: 12, role: "Director Law Schools" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-32 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">{t.teamTitle}</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t.teamDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {teamData.map((section, index) => (
            <div key={index} className="mb-24">
              <motion.h2
                className="text-4xl font-bold text-slate-900 mb-3 text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {section.category}
              </motion.h2>

              <div className="flex justify-center mb-16">
                <div className="w-24 h-2 bg-orange-500 rounded-full"></div>
              </div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center"
                }}
              >
                {section.members.map(member => (
                  <motion.div
                    key={member.id}
                    variants={cardVariants}
                    className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300
                              flex flex-col items-center transform hover:-translate-y-2
                              border border-slate-100 mx-auto"
                    whileHover={{ scale: 1.02 }}
                    style={{
                      width: "100%",
                      maxWidth: "320px",
                      margin: "0 auto 20px"
                    }}
                  >
                    {/* Placeholder photo */}
                    <motion.div
                      className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg bg-slate-200 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img
                        src={placeholderImage}
                        alt="TBD"
                        className="w-24 h-24 object-contain opacity-40"
                      />
                    </motion.div>

                    {/* Details */}
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-slate-400 italic">TBD</h3>
                      <p className="text-orange-600 font-medium mt-1 mb-3">{member.role}</p>

                      {/* Contact placeholder */}
                      <div className="mt-6 flex items-center justify-center">
                        <span className="text-slate-300 bg-slate-100 p-3 rounded-full cursor-default">
                          <Mail size={22} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TeamPage;

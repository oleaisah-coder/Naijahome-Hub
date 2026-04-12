import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { agents } from '../data';

export default function AgentsSection() {
  return (
    <section id="agents" className="py-24 bg-[#f8fafc] dark:bg-[#0a0a0f] transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Top Property Partners
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#16161a] border border-gray-100 dark:border-white/5 p-5 rounded-xl shadow-sm"
            >
              <div className="w-full h-56 rounded-xl overflow-hidden mb-4 bg-gray-200">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-1 pb-2">
                 <h3 className="text-lg font-bold text-[#111827] dark:text-white mb-1">{agent.name}</h3>
                 <p className="text-gray-500 dark:text-gray-400 font-medium text-[13px] mb-5">{agent.title}</p>
                 <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 dark:border-gray-700 rounded-lg text-[14px] font-semibold text-[#111827] dark:text-white hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <Phone size={16} />
                      Call
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 dark:border-gray-700 rounded-lg text-[14px] font-semibold text-[#111827] dark:text-white hover:border-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                      <MessageCircle size={16} className="text-green-600" />
                      WhatsApp
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

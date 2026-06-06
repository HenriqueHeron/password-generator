import { DiGithub } from 'react-icons/di';
import { LiaLinkedin } from 'react-icons/lia';
import { GoMail } from 'react-icons/go';

export default function Footer(): React.ReactNode {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="text-center mb-4">
        <p className="text-gray-600 text-sm">Developed by</p>
        <p className="text-white font-semibold text-lg">Henrique Magalhães</p>
      </div>
      <div className="flex justify-center gap-5 items-center">
        <a
          href="https://github.com/autotelico"
          className="text-gray-500 hover:text-violet-400 transition-colors"
          aria-label="GitHub"
        >
          <DiGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/henrique-mag/"
          className="text-gray-500 hover:text-violet-400 transition-colors"
          aria-label="LinkedIn"
        >
          <LiaLinkedin size={30} />
        </a>
        <a
          href="mailto:henriqueheronhh@gmail.com"
          className="text-gray-500 hover:text-violet-400 transition-colors"
          aria-label="Email"
        >
          <GoMail size={26} />
        </a>
      </div>
    </footer>
  );
}

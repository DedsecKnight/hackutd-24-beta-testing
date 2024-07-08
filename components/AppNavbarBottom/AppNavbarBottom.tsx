import FilePlusIcon from '@/public/icons/file-plus.svg';
import CalendarIcon from '@/public/icons/calendar.svg';
import TrophyIcon from '@/public/icons/trophy.svg';
import QuestionIcon from '@/public/icons/question.svg';
import AdminIcon from '@/public/icons/admin.svg';
import clsx from 'clsx';
import Link from 'next/link';
import { useAuthContext } from '@/lib/user/AuthContext';

export default function AppNavbarBottom() {
  const { hasProfile } = useAuthContext();

  return (
    <div
      className={clsx(
        'fixed z-[1000] bottom-2 left-1/2 -translate-x-1/2',
        'flex md:hidden gap-4 bg-[rgba(0,0,0,0.70)]',
        'p-4 rounded-xl',
      )}
    >
      <FilePlusIcon />

      <Link href="/#schedule-section">
        <CalendarIcon />
      </Link>

      <Link href="/#prizes-section">
        <TrophyIcon />
      </Link>

      <Link href="#faq-section">
        <QuestionIcon />
      </Link>

      <Link href={hasProfile ? '/profile' : '/register'}>
        <AdminIcon />
      </Link>
    </div>
  );
}

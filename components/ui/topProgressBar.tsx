'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const TopProgressBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleComplete = () => {
      NProgress.done();
    };

    handleStart();
    handleComplete();

  }, [pathname, searchParams]);

  return null;
};

export default TopProgressBar;
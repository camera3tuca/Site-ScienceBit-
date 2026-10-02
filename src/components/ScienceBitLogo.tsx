import React from 'react';

interface ScienceBitLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const ScienceBitLogo: React.FC<ScienceBitLogoProps> = ({
  variant = 'auto',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  // Sizing definitions
  const sizeConfig = {
    sm: {
      mainText: 'text-base sm:text-lg',
      subText: 'text-[9px]',
      lineLength: 'w-4 sm:w-6',
      lineWidth: 'h-[1.5px]',
      tracking: 'tracking-[0.25em]',
    },
    md: {
      mainText: 'text-xl sm:text-2xl',
      subText: 'text-[10px] sm:text-[11px]',
      lineLength: 'w-6 sm:w-8',
      lineWidth: 'h-[2px]',
      tracking: 'tracking-[0.3em]',
    },
    lg: {
      mainText: 'text-3xl sm:text-4xl',
      subText: 'text-xs sm:text-sm',
      lineLength: 'w-8 sm:w-12',
      lineWidth: 'h-[2.5px]',
      tracking: 'tracking-[0.35em]',
    },
    xl: {
      mainText: 'text-4xl sm:text-6xl',
      subText: 'text-sm sm:text-base',
      lineLength: 'w-12 sm:w-16',
      lineWidth: 'h-[3px]',
      tracking: 'tracking-[0.4em]',
    },
  }[size];

  const textColor = {
    dark: 'text-white',
    light: 'text-slate-900',
    auto: 'text-slate-900 dark:text-white',
  }[variant];

  const subTextColor = {
    dark: 'text-slate-300',
    light: 'text-slate-800',
    auto: 'text-slate-700 dark:text-slate-300',
  }[variant];

  return (
    <div className={`inline-flex flex-col items-center select-none font-sans ${className}`}>
      {/* Main Brand Title: Science Bit */}
      <div className={`font-black tracking-tight leading-none ${sizeConfig.mainText} flex items-center`}>
        <span className={textColor}>Science</span>
        <span className="text-blue-600 ml-1.5">Bit</span>
      </div>

      {/* Subtitle: — C O M P U T E R — */}
      {showSubtitle && (
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5 w-full">
          <span className={`bg-blue-600 rounded-full ${sizeConfig.lineLength} ${sizeConfig.lineWidth} shrink-0`} />
          <span className={`font-bold uppercase ${sizeConfig.subText} ${sizeConfig.tracking} ${subTextColor} whitespace-nowrap`}>
            COMPUTER
          </span>
          <span className={`bg-blue-600 rounded-full ${sizeConfig.lineLength} ${sizeConfig.lineWidth} shrink-0`} />
        </div>
      )}
    </div>
  );
};

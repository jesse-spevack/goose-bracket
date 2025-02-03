/**
 * Shared styles for consistent component styling
 */
export const styles = {
  // Text styles
  heading: {
    primary: 'text-2xl font-bold text-orange-400',
    secondary: 'text-lg font-semibold text-orange-400',
  },
  
  // Border styles
  border: {
    separator: 'border-b border-orange-200/20',
    container: 'border border-orange-400/50',
  },
  
  // Container styles
  container: {
    bracket: 'bg-gray-800/50 p-4 rounded-lg',
    section: 'flex flex-col space-y-6',
  },
  
  // Button styles
  button: {
    base: 'px-3 py-2 text-sm font-medium rounded-md transition-colors w-full sm:w-48',
    song: {
      active: 'bg-gray-800 hover:bg-gray-700 text-orange-400 border border-orange-400/50 hover:border-orange-400',
      selected: 'bg-orange-400/20 hover:bg-orange-400/30 text-orange-300 border-2 border-orange-400',
      disabled: 'bg-gray-700/50 text-gray-500 border border-gray-600 cursor-not-allowed',
    },
  },
  
  // Layout styles
  layout: {
    header: 'pb-2 mb-4',
    content: 'space-y-4',
  },
} as const;

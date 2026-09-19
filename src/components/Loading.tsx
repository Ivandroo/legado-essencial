export default function Loading({ fullPage = false }) {
  return (
    <div 
      className={`flex items-center justify-center ${
        fullPage ? 'fixed inset-0 bg-white/70 z-50' : 'w-full h-full min-h-25'
      }`}
    >
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

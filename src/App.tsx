import './App.css';
import Filter from './Components/Filter';
import SearchResult from './Components/SearchResult';
import { ThumbsUp, ThumbsDown} from "lucide-react";
function App() {
  return (
    <>
      <div style={{ width: "100%", padding: '10px', maxWidth: '100%' }}>
        <div className="search-result bg-[#F9F7ED] text-[#5D3B26] flex items-center justify-center h-[158px] w-full rounded-lg mb-10">
          <h1
            className="font-normal text-[62px]"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            نتائج البحث
          </h1>
        </div>

        <div className="wrapper max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-10">
          <div>
            <SearchResult />
          </div>
          <div>
            <Filter />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col gap-4 md:flex-row md:gap-6">
          <div className="flex-1 flex flex-col text-right bg-white p-6 rounded-md shadow-lg">
            <p className="text-[18px] font-semibold text-[#232528] leading-relaxed mb-4">
              هل استخدمت خدماتنا في دليل الخدمات بنا مؤخرًا؟
            </p>
            <p className="text-[16px] text-[#4B4F58]">
              ساعدنا على تحسين تجربتك من خلال تقديم ملاحظاتك.
            </p>
            <div className="flex justify-end mt-4">
              <button className="bg-white px-4 py-2 rounded border border-[#92722A] text-[#92722A] shadow-sm hover:bg-gray-50">
                أعطنا تقييمك
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col text-right bg-white p-6 rounded-md shadow-lg">
            <p className="text-[18px] font-semibold text-[#232528] leading-relaxed mb-4">
              هل وجدت هذا المحتوى مفيدًا؟
            </p>
            <p className="text-[16px] text-[#4B4F58]">
              يمكنك مساعدتنا على التحسين من خلال تقديم تعليقاتك حول تجربتك.
            </p>
            <div className="flex justify-end gap-3 mt-4">
              <button className="flex items-center gap-2 bg-white px-4 py-2 rounded border border-[#92722A] text-[#92722A] shadow-sm">
                <ThumbsUp size={20} color="#92722A" />
                نعم
              </button>
              <button className="flex items-center gap-2 bg-white px-4 py-2 rounded border border-[#92722A] text-[#92722A] shadow-sm">
                <ThumbsDown size={20} color="#92722A" />
                لا
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;

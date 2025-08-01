import { Calendar } from "lucide-react";

const SearchResult = () => {
  const BG_HEADER = "#F9F7ED";
  const COLOR_HEADER_TEXT = "#5D3B26";
  const COLOR_TITLE_DESC = "#64758B";

  const commonDescription =
    "زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن ز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى";

  const resultsServices = [
    {
      title: "طلب عقد زواج",
      date: "اكتوبر 12, 2023",
      description: commonDescription,
      highlight: true,
      category: "الخدمات الإلكترونية",
    },

  ];

  const resultsCommonQuestions = [
    {
      title: "طلب عقد زواج",
      category: "الأسئلة الأكثر شيوعاً",
      date: "اكتوبر 12, 2023",
      description: commonDescription,
      highlight: true,
    },
    {
      title: "طلب عقد زواج",
      category: "الأسئلة الأكثر شيوعاً",
      date: "12 يوليو 2023",
      description: commonDescription,
      highlight: false,
    },
    {
      title: "طلب عقد زواج",
      category: "الأسئلة الأكثر شيوعاً",
      date: "12 يوليو 2023",
      description: commonDescription,
      highlight: false,
    },
  ];

  const resultsNews = [
    {
      title: "طلب عقد زواج",
      category: "الأخبار",
      date: "12 يوليو 2023",
      description: commonDescription,
      highlight: false,
    },
    {
      title: "طلب عقد زواج",
      category: "الأخبار",
      date: "12 يوليو 2023",
      description: commonDescription,
      highlight: false,
    },
  ];

  const ResultCard = ({ item, showCategoryTextAfterTitle }) => {
    const getCategoryStyles = (category) => {
      if (category === "الخدمات الإلكترونية") {
        return {
          bg: "#E7F5FF",
          text: "#002DC2",
        };
      }
      return {
        bg: BG_HEADER,
        text: COLOR_HEADER_TEXT,
      };
    };

    const { bg, text } = getCategoryStyles(item.category);

    return (
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-3 text-right">
        <div className="flex justify-end items-center gap-4">
          <h2 className="text-[26px] font-semibold" style={{ color: "#232528" }}>

            {showCategoryTextAfterTitle && (
              <span
                className="mr-2 text-[16px] font-normal"
                style={{ color: COLOR_TITLE_DESC }}
              >
              </span>
            )}
          </h2>
          {item.category && (
            <span
              className="flex items-center justify-center rounded text-sm font-medium whitespace-nowrap"
              style={{
                backgroundColor: bg,
                color: text,
                height: "24px",
                padding: "0 8px",
              }}
            >
              {item.category}
            </span>
          )}
          <span style={{ fontWeight: "bold", fontSize: "21px" }}>
            {item.title}
          </span>{" "}

        </div>
        <div
          className="flex items-center justify-end gap-1"
          style={{ color: "#4B4F58", fontSize: "14px" }}
        >
          <Calendar size={14} />
          <span>{item.date}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-6 w-full">
      <div dir="rtl" className="bg-white text-right text-[#64758B]">
        نتائج البحث لـخدمات " عقد زواج "
      </div>
      {resultsServices.map((item, idx) => (
        <ResultCard key={idx} item={item} showCategoryTextAfterTitle={true} />
      ))}

      <div dir="rtl" className="text-right text-[#64758B]">
        نتائج البحث للأسئلة الأكثر شيوعاً ”عقد زواج“
      </div>
      {resultsCommonQuestions.map((item, idx) => (
        <ResultCard key={idx} item={item} showCategoryTextAfterTitle={true} />
      ))}

      <div dir="rtl" className="bg-white text-right text-[#64758B]">
        نتائج البحث للأخبار ”عقد زواج“
      </div>
      {resultsNews.map((item, idx) => (
        <ResultCard key={idx} item={item} showCategoryTextAfterTitle={true} />
      ))}

      <div className="flex items-center justify-center">
        <div className="aegov-pagination flex flex-1 justify-between items-center sm:hidden">
          <a className="aegov-pagination-previous" href="#">
            <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
            <span>السابق</span>
          </a>
          <span className="pages">الصفحة 10 من 13</span>
          <a className="aegov-pagination-next" href="#">
            <span>التالي</span>
            <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
          </a>
        </div>

        <div className="aegov-pagination max-sm:hidden" role="navigation">
          <a className="aegov-pagination-first" aria-label="First Page" href="#">
            <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <polyline points="200 208 120 128 200 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
              <polyline points="120 208 40 128 120 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
            <span>الأولى</span>
          </a>
          <a className="aegov-pagination-previous" rel="prev" aria-label="Previous Page" href="#">
            <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
            <span>السابق</span>
          </a>
          <a className="aegov-pagination-page aegov-pagination-smaller" title="Page 1" href="#">1</a>
          <a className="aegov-pagination-page aegov-pagination-smaller" title="Page 2" href="#">2</a>
          <span aria-current="page" className="aegov-pagination-current">3</span>
          <a className="aegov-pagination-page aegov-pagination-larger" title="Page 4" href="#">4</a>
          <a className="aegov-pagination-page aegov-pagination-larger" title="Page 5" href="#">5</a>
          <span className="aegov-pagination-extend">...</span>
          <a className="aegov-pagination-page aegov-pagination-larger" title="Page 17" href="#">17</a>
          <a className="aegov-pagination-next" rel="next" aria-label="Next Page" href="#">
            <span>التالي</span>
            <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
          </a>
          <a className="aegov-pagination-last" aria-label="Last Page" href="#">
            <span>الأخيرة</span>
            <svg aria-hidden="true" className="rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <polyline points="56 48 136 128 56 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
              <polyline points="136 48 216 128 136 208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;

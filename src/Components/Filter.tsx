import { useState, type ChangeEvent,type FormEvent } from "react";
import { Search, ChevronDown, ArrowLeft, CalendarDays } from "lucide-react";

type FormData = {
  search: string;
  category: string;
  dateFrom: string;
  dateTo: string;
  checkboxes: boolean[];
};

const Filter = () => {
  const [formData, setFormData] = useState<FormData>({
    search: "",
    category: "",
    dateFrom: "",
    dateTo: "",
    checkboxes: [false, false, false, false, false],
  });

  const handleChange = (
    field: Exclude<keyof FormData, "checkboxes">,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (index: number) => {
    const updated = [...formData.checkboxes];
    updated[index] = !updated[index];
    setFormData((prev) => ({ ...prev, checkboxes: updated }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-aegold-500 bg-white rounded-md p-6 flex flex-col gap-5 w-64"
    >
      <h2 className="text-[20px] text-[#232528] font-bold text-right font-semibold">
        الفلتر
      </h2>

      <div
        className="flex items-center gap-0 border border-aegold-500 rounded-md px-1 py-0"
        dir="rtl"
      >
        <Search className="w-5 h-5 text-[#9EA2A9] mr-2" />
        <input
          type="text"
          placeholder="ابحث"
          value={formData.search}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange("search", e.target.value)
          }
          className="flex-1 bg-transparent border-none focus:outline-none text-[#5D3B26] placeholder-[#5D3B26] text-right mr--2"
        />
      </div>

      <div dir="rtl">
        <label className="block text-[20px] text-[#232528] mb-2 text-right font-semibold">
          التصنيف
        </label>
        <div className="relative">
          <select
            value={formData.category}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              handleChange("category", e.target.value)
            }
            className="w-full border border-aegold-500 rounded-md py-2 pl-8 pr-3 appearance-none bg-transparent focus:outline-none text-[#5D3B26]"
          >
            <option value="">اختر</option>
            <option value="option1">خيار 1</option>
            <option value="option2">خيار 2</option>
          </select>
          <ChevronDown className="absolute top-1/2 left-2 -translate-y-1/2 text-[#92722A] pointer-events-none" />
        </div>

      </div>

      <div>
        <label className="block text-[20px] text-[#232528] mb-2 text-right font-semibold">
          التاريخ
        </label>
        <div className="flex flex-col gap-3">
          <div
            className="flex items-center gap-2 border border-aegold-500 rounded-[8px] px-1"
            dir="rtl"
          >
            <input
              type="text"
              placeholder="من"
              value={formData.dateFrom}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("dateFrom", e.target.value)
              }
              className="flex-1 bg-transparent border-none focus:outline-none text-[#5D3B26] text-right"
            />
            <CalendarDays className="w-5 h-5 text-[#232528]" />
          </div>
          <div
            className="flex items-center gap-2 border border-aegold-500 rounded-[8px] px-1"
            dir="rtl"
          >
            <input
              type="text"
              placeholder="إلى"
              value={formData.dateTo}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange("dateTo", e.target.value)
              }
              className="flex-1 bg-transparent border-none focus:outline-none text-[#5D3B26] text-right"
            />
            <CalendarDays className="w-5 h-5 text-[#232528]" />
          </div>
        </div>
      </div>

      <div>
        <label
          dir="rtl"
          className="block mb-[5px] text-[#232528] font-semibold"
          style={{
            textAlign: "right",
            fontSize: "20px",
            fontFamily: "Alexandria, sans-serif",
          }}
        >
          البحث في:
        </label>
        <div className="flex flex-col gap-2">
          {[
            "عنوان اختيار متعدد",
            "عنوان اختيار متعدد",
            "عنوان اختيار متعدد",
            "عنوان اختيار متعدد",
            "عنوان اختيار متعدد",
          ].map((label, i) => (
            <label
              key={i}
              className="flex items-center justify-start gap-4 text-[#232528] text-[16px]"
              dir="rtl"
            >
              <input
                type="checkbox"
                checked={formData.checkboxes[i]}
                onChange={() => handleCheckboxChange(i)}
                className="w-5 h-5 border border-aegold-500 accent-[#92722A] rounded-sm"
              />
              <span>{label}</span>
            </label>
          ))}

          <p
            className="flex gap-1 text-[#92722A] text-sm mt-2 bg-transparent cursor-pointer"
            dir="rtl"
            style={{ textAlign: "right" }}
          >
            عرض المزيد
            <ArrowLeft className="w-4 h-4" />
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#92722A] text-[#FFFFFF] py-2 rounded-md hover:bg-[#6C4527]"
      >
        البحث
      </button>
    </form>
  );
};

export default Filter;

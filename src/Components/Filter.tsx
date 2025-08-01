import { useState, type ChangeEvent, type FormEvent } from "react";
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
      className="border border-aegold-500 bg-white rounded-md p-6 flex flex-col gap-5 w-64 "
    >
      <h2 className="text-[20px] text-[#232528] font-bold text-right font-semibold">
        الفلتر
      </h2>
      <div className="aegov-form-control mb-4" dir="rtl">
        <div className="form-control-input">
          <span className="control-prefix">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <circle
                cx="112"
                cy="112"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="168.57"
                y1="168.57"
                x2="224"
                y2="224"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </span>
          <input
            type="search"
            name="search_prefix"
            id="search_prefix"
            placeholder="البحث"
          />

        </div>
      </div>



      <div className="aegov-form-control" dir="rtl">
        <h4 className="text-[17px] text-[#232528] font-bold text-right font-semibold">تصنيف</h4>

        <div className="form-control-input">
          <select id="referenceId" name="nameRelatedSelect" autoComplete="select-name">
            <option>اختيار 1</option>
            <option>اختيار 2</option>
            <option>اختيار 3</option>
          </select>
        </div>
      </div>


      <div>
        <label className="block text-[20px] text-[#232528] mb-2 text-right font-semibold">
          التاريخ
        </label>
        <div className="flex flex-col gap-3" dir="rtl">
          <div className="flex items-center gap-2 border border-aegold-500 rounded-[8px] px-1">
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

          <div className="flex items-center gap-2 border border-aegold-500 rounded-[8px] px-1">
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
        <div className="flex flex-col gap-2" dir="rtl">
          {[
            "عنوان اختيار متعدد 1",
            "عنوان اختيار متعدد 2",
            "عنوان اختيار متعدد 3",
            "عنوان اختيار متعدد 4",
            "عنوان اختيار متعدد 5",
          ].map((label, i) => {
            const checkboxId = `checkbox${i + 1}`;
            return (
              <div key={i} className="aegov-check-item">
                <input
                  id={checkboxId}
                  type="checkbox"
                  value={i + 1}
                  checked={formData.checkboxes[i]}
                  onChange={() => handleCheckboxChange(i)}
                  className="accent-[#92722A]"
                />
                <label htmlFor={checkboxId} className="text-[#232528] text-[16px]">
                  {label}
                </label>
              </div>
            );
          })}

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

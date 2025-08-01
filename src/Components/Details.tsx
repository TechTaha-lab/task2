import { Download, Bookmark, FileText, ThumbsDown, ThumbsUp } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const Details = () => {
    const items = [
        "ملخص القضية",
        "الحضور",
        "محاور الجلسة",
        "القرارات المتخذة",
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const listRef = useRef(null);
    const [underlineStyle, setUnderlineStyle] = useState({ opacity: 0 });

    useEffect(() => {
        if (selectedIndex === null) {
            setUnderlineStyle({ opacity: 0 });
            return;
        }
        const listItems = listRef.current.querySelectorAll('li');
        const item = listItems[selectedIndex];
        if (item) {
            const { offsetTop, offsetHeight } = item;
            setUnderlineStyle({
                position: 'absolute',
                right: 0,
                top: offsetTop,
                height: offsetHeight,
                width: '4px',
                backgroundColor: '#92722A',
                borderRadius: '2px',
                transition: 'top 0.3s ease',
                opacity: 1,
            });
        }
    }, [selectedIndex]);

    return (
        <div className="text-[#232528] bg-white px-4 sm:px-6 lg:px-8" dir="rtl">
            <div className="mt-8">
                <div className="p-4 rounded">
                    <h3 className="text-right text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold mb-4">
                        11 / 2024 / 43 تجاري مصارف
                    </h3>

                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
                        <div className="w-full md:w-auto text-right">
                            <h2 className="font-bold text-[24px] md:text-[26px] mb-2">
                                ملخص القضية
                            </h2>
                            <p className="text-[14px] leading-relaxed whitespace-pre-line max-w-md">
                                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 self-end">
                            <div className="flex gap-3 shrink-0">
                                <button className="flex items-center text-[#7C5E24] gap-1 px-3 py-1 border border-gray-300 rounded bg-[#F9F7ED]">
                                    <Download size={16} />
                                </button>
                                <button className="flex items-center text-[#7C5E24] gap-1 px-3 py-1 border border-gray-300 rounded bg-[#F9F7ED]">
                                    <Bookmark size={16} />
                                </button>
                                <button className="flex items-center text-[#7C5E24] gap-1 px-3 py-1 border border-gray-300 rounded bg-[#F9F7ED]">
                                    <FileText size={16} />
                                </button>
                            </div>
                            <div
                                style={{ width: '319px', height: '224px', padding: '16px', gap: '16px' }}
                                className="bg-[#F7F7F7] flex flex-col items-end relative"
                            >
                                <p
                                    className="text-[#92722A] font-semibold"
                                    style={{ fontSize: '26px', textAlign: 'right', width: '100%' }}
                                >
                                    في هذة الصفحة
                                </p>
                                <ul
                                    ref={listRef}
                                    className="list-none text-right w-full space-y-2 relative"
                                    style={{ position: 'relative' }}
                                >
                                    {items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            onClick={() => setSelectedIndex(idx)}
                                            className={`cursor-pointer pr-4 ${selectedIndex === idx ? 'font-semibold' : 'font-normal'
                                                }`}
                                            style={{ position: 'relative' }}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                    <div style={underlineStyle} />
                                </ul>
                                <hr
                                    style={{
                                        backgroundColor: 'transparent',
                                        borderTop: '1px solid transparent',
                                        marginLeft: 'auto',
                                        width: '100%',
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="my-6" style={{ borderTop: '1px solid rgba(192, 192, 192, 0.5)' }} />
                <div className="rounded">
                    <h2 className="text-right font-semibold text-[26px]">تاريخ تسجيل القضية</h2>
                    <p className="text-right text-[16px]">03 يناير 2024</p>
                </div>

                <hr className="my-6" style={{ borderTop: '1px solid rgba(192, 192, 192, 0.5)' }} />
                <div className="rounded">
                    <h2 className="text-right font-semibold text-[26px]">تاريخ إصدار الحكم</h2>
                    <p className="text-right text-[16px]">03 مارس 2024</p>
                </div>

                <hr className="my-6" style={{ borderTop: '1px solid rgba(192, 192, 192, 0.5)' }} />
                <div className="flex flex-col items-end gap-6 border-b border-[#C3C6CB] pb-6">
                    <h2 className="text-[26px] font-semibold text-right w-full">أطراف القضية</h2>

                    <div className="w-full">
                        <h3 className="text-[16px] font-semibold text-right mb-1">المدعي</h3>
                        <ul className="list-none text-right space-y-1">
                            <li className="text-[16px] font-normal">لوريم إيبسوم هو ببساطة نص شكلي</li>
                        </ul>
                    </div>

                    <div className="w-full">
                        <h3 className="text-[16px] font-semibold text-right mb-1">المدعي عليه</h3>
                        <ul className="list-none text-right space-y-1">
                            <li className="text-[16px] font-normal">لوريم إيبسوم هو ببساطة نص شكلي</li>
                            <li className="text-[16px] font-normal">لوريم إيبسوم هو ببساطة نص شكلي</li>
                            <li className="text-[16px] font-normal">لوريم إيبسوم هو ببساطة نص شكلي</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white py-6 mt-6">
                    <h2 className="text-[26px] font-semibold text-right mb-4">تفاصيل الحكم</h2>
                    <p className="text-[16px] leading-[24px] text-right whitespace-pre-line">
                        بعد سماع المرافعه الشفويه و مطالعه الاوراق و المستندات
                    </p>
                    <p className="text-[16px] leading-[24px] text-right whitespace-pre-line mt-4">
                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                        ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النصز

                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص

                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص

                        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص
                    </p>
                </div>

                <hr className="my-6" style={{ borderTop: '1px solid rgba(192, 192, 192, 0.5)' }} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    <div className="flex flex-col text-right bg-white p-6 rounded-md shadow-lg">
                        <p className="text-[18px] font-semibold leading-relaxed mb-4">
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

                    <div className="flex flex-col text-right bg-white p-6 rounded-md shadow-lg">
                        <p className="text-[18px] font-semibold leading-relaxed mb-4">
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
        </div>
    );
};

export default Details;

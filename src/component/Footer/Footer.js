import React from 'react';

const Footer = () => {
    return (
        <div>
            <section class="pt-6 bg-gray-50">
                <div
                    class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
                >
                    <div>Copyright 2022 Learn with Sumit.</div>
                    <div>
                        <a
                            href="https://youtube.com/learnwithsumit"
                            target="_blank"
                            rel="noreferrer"
                        >
                            YouTube Channel
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
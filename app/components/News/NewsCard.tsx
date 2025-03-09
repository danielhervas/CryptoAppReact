import { useEffect, useState } from "react";
import axios from "axios";

export interface NewsData {
    TYPE: string;
    ID: number;
    GUID: string;
    PUBLISHED_ON: number;
    IMAGE_URL: string;
    TITLE: string;
    URL: string;
    BODY: string;
    SOURCE_ID: number;
    LANG: string;
    SENTIMENT: string;
    CATEGORY_DATA: { ID: number; NAME: string; CATEGORY: string }[];
}

const limitText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
};


const NewsCard = () => {
    const [newsData, setNewsData] = useState<NewsData[]>([]);


    const fetchNews = async () => {
        try {
            const response = await axios.get(
                "https://data-api.coindesk.com/news/v1/article/list?limit=12&lang=ES"
            );

            console.log("Full News API Response:", response.data);
            const newsArray = response.data?.Data || [];

            console.log("Processed News Data:", newsArray);

            if (Array.isArray(newsArray) && newsArray.length > 0) {
                setNewsData(newsArray);
            } else {
                console.error("No valid news data received.");
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };


    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 justify-center">
            {newsData.length > 0 ? (
                newsData.map((news) => (
                    <div
                        key={news.ID}
                        className="flex flex-col bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full hover:border-2 hover:border-green-500"
                    >
                        <div className="card-body p-4 flex flex-col flex-grow ">
                            <h5 className="card-title text-xl font-semibold text-black text-bold ">{news.TITLE}</h5>

                            <p className="card-text mt-4 text-gray-700 flex-grow">{limitText(news.BODY, 30)}</p>
                        </div>

                        {news.IMAGE_URL && (
                            <img src={news.IMAGE_URL} alt={news.TITLE} className="mb-5 mx-auto w-50 h-32 object-cover rounded-t-lg" />
                        )}

                        <div className="card-footer bg-gray-100 p-3 text-center rounded-b-lg mt-auto">
                            <a
                                href={news.URL}
                                className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg border-2 border-transparent transition-all duration-300 hover:border-red-500 hover:bg-blue-700"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Leer más
                            </a>

                            <small className="text-muted text-xs block mt-2">
                                Fecha de publicación: {new Date(news.PUBLISHED_ON * 1000).toLocaleDateString()}
                            </small>
                        </div>
                    </div>
                ))
            ) : (
                <p className="w-full text-center">Cargando noticias...</p>
            )}
        </div>
    );
};

export default NewsCard;

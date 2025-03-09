import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoinCard from '../components/Coin/CoinCard';
import NoResults from '../components/Coin/NoResults';
import Pagination from '../components/ui/Pagination/Pagination';
import type { Coin as CoinType } from "../types";
import SearchBar from '~/components/Coin/SearchBar';

export default function Home() {
  const [cryptoData, setCryptoData] = useState<CoinType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://data-api.coindesk.com/asset/v1/top/list?page=1&page_size=44&sort_by=CIRCULATING_MKT_CAP_USD&sort_direction=DESC&groups=ID,BASIC,SUPPLY,PRICE,MKT_CAP,VOLUME,CHANGE,TOPLIST_RANK&toplist_quote_asset=USD'
      );

      const coins = response.data?.Data?.LIST?.map((coin: any) => ({
        id: coin.ID.toString(),
        name: coin.NAME,
        symbol: coin.SYMBOL || 'N/A',
        image_url: coin.LOGO_URL || 'https://via.placeholder.com/50',
        price: coin.PRICE_USD || 0,
        change24h: coin.SPOT_MOVING_24_HOUR_CHANGE_PERCENTAGE_USD || 0
      })) || [];

      setCryptoData(coins);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query) {
      const filteredData = cryptoData.filter((coin) =>
        coin.name.toLowerCase().includes(query.toLowerCase())
      );
      setCryptoData(filteredData);
    } else {
      fetchData();
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cryptoData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(cryptoData.length / itemsPerPage);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div>
        <SearchBar
          onSearch={handleSearch}
          style={{ marginTop: '60px', marginBottom: '60px', marginLeft: '20px' }}
        />
        <div className="flex flex-col gap-4 mt-2">
          {currentItems.length > 0 ? (
            currentItems.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))
          ) : (
            <NoResults />
          )}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
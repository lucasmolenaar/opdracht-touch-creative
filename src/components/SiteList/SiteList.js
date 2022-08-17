import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SiteLink from '../SiteLink/SiteLink';

import './SiteList.scss';


const SiteList = ({ setTotalSites, setOnlineSites, setOfflineSites, setUnsafeSites }) => {
    const [excelData, setExcelData] = useState([]);
    
    //Fetch data from excel file
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('https://sheet.best/api/sheets/1bc3abb1-b0e5-4fff-a3d1-09404eed03c7');
                setExcelData(data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [])

    // Fetch header data
    useEffect(() => {
        const onlineSites = excelData.filter((site) => {
            return site.Url.includes('https') ;
        })
        
        const offlineSites = excelData.filter((site) => {
            return site.Url.substr(0, 5) === 'http:';
        })

        setTotalSites(excelData.length);
        setOnlineSites(onlineSites.length);
        setUnsafeSites(offlineSites.length);
        setOfflineSites(offlineSites.length);
    }, [excelData])

    //Remove protocol for displaying without
    const removeProtocols = (url) => {
        if (url.includes('www')) {
            return url.split('w.');
        } else {
            return url.split('//');
        }
    }

    return (
        <main>
            {
                excelData.length > 0 ? 
                <ul className='site-list'>
                    {
                        excelData.map((url, index) => {
                            return (
                                <SiteLink 
                                    key={index} 
                                    name={removeProtocols(url.Url)[1]} 
                                    url={url.Url}
                                    https={url.Url.includes('https')}
                                />
                            );
                        })
                    }
                </ul> 
                :
                <h3 className='loading'>Loading...</h3>
            }
        </main>
    );
}

export default SiteList;
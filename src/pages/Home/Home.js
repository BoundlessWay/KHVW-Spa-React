import React, { useState, useEffect } from 'react';
import reportWebVitals from '../../reportWebVitals';
import '../../assets/styles/Home.css';

const Home = () => {
    const [vitals, setVitals] = useState([]);

    useEffect(() => {
        reportWebVitals((metric) => {
            setVitals((prevVitals) => {
                if (!prevVitals.some(v => v.name === metric.name && v.id === metric.id)) {
                    return [...prevVitals, metric];
                }
                return prevVitals;
            });
        });
    }, []);

    const getMetricExplanation = (metricName) => {
        switch (metricName) {
            case 'FCP':
                return 'First Contentful Paint: Thời gian trang bắt đầu hiển thị nội dung đầu tiên.';
            case 'LCP':
                return 'Largest Contentful Paint: Thời gian trang tải xong nội dung lớn nhất.';
            case 'FID':
                return 'First Input Delay: Thời gian từ khi người dùng tương tác đầu tiên cho đến khi trình duyệt có thể phản hồi.';
            case 'CLS':
                return 'Cumulative Layout Shift: Đo lường sự thay đổi bố cục không mong muốn của trang.';
            default:
                return '';
        }
    };

    const timeRelatedVitals = vitals.filter(vital => ['FCP', 'LCP', 'FID', 'CLS'].includes(vital.name));

    return (
        <div className="home-container">
            <h1>Web Vitals Report</h1>
            <div className="vitals-container">
                {timeRelatedVitals.map((vital, index) => (
                    <div key={index} className="vital-item">
                        <p><strong>Metric</strong>: {vital.name}</p>
                        <p><strong>Value</strong>: {vital.value} ms</p>
                        <p><strong>Explanation</strong>: {getMetricExplanation(vital.name)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

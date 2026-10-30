import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: 'Làm thế nào để xem phim trên trang web này?',
      answer: 'Bạn cần đăng ký tài khoản và đăng nhập để có thể xem các bộ phim.'
    },
    {
      question: 'Phí dịch vụ là bao nhiêu?',
      answer: 'Chúng tôi cung cấp các gói dịch vụ khác nhau, bạn có thể tham khảo tại trang giá dịch vụ của chúng tôi.'
    },
    {
      question: 'Tôi có thể tải phim về không?',
      answer: 'Hiện tại, chúng tôi không hỗ trợ tải phim về máy. Bạn có thể xem phim trực tiếp trên trang web của chúng tôi.'
    },
    {
      question: 'Tôi quên mật khẩu, phải làm sao?',
      answer: 'Bạn có thể sử dụng chức năng quên mật khẩu để đặt lại mật khẩu mới.'
    },
    {
      question: 'Trang web có hỗ trợ phụ đề không?',
      answer: 'Chúng tôi hỗ trợ phụ đề cho hầu hết các bộ phim trên trang web.'
    },
    {
      question: 'Tôi gặp vấn đề khi xem phim, làm thế nào để được hỗ trợ?',
      answer: 'Bạn có thể liên hệ với bộ phận hỗ trợ khách hàng qua email hoặc số điện thoại trên trang Liên hệ của chúng tôi.'
    },
  ];

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Câu hỏi thường gặp</h2>
      {questions.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => handleToggle(index)}>
            {item.question}
          </div>
          {openIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
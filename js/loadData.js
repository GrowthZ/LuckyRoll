import GSheetProcessor from '../packaged/g-sheets-api/src/gsheetsprocessor.js';

// Link Google Sheet và Sheet ID
const demoSheetURL = 'https://docs.google.com/spreadsheets/d/1Hsek5hgCpe2EHgvIjOdSvz4OQxRTPwF_Gs1czib9GUk/edit?usp=sharing';
const demoSheetId = '1Hsek5hgCpe2EHgvIjOdSvz4OQxRTPwF_Gs1czib9GUk';

// Thiết lập options cho GSheetProcessor
const options = {
    sheetId: demoSheetId,
    returnAllResults: false,
    sheetNumber: 1, // Chọn sheet đầu tiên
    filter: {}, // Lọc các hàng nếu cần
};

let customers = []; // Khai báo mảng lưu trữ kết quả

// Gọi GSheetProcessor để lấy dữ liệu từ Google Sheets
GSheetProcessor(options, results => {
    // Chuyển đổi dữ liệu kết quả sang mảng
    customers = Array.from(results);
    console.log(customers);

    // Khi tài liệu đã sẵn sàng
    $(document).ready(function () {
        // Kích hoạt nút start
        $('.start').removeAttr('disabled');
    });
});
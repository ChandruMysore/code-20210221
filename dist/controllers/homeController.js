"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDataFromCSV = void 0;
const fs = require('fs');
exports.GetDataFromCSV = (req, res, next) => {
    const fs = require('fs');
    const parse = require('csv-parser');
    const csvFile = fs.statSync('./data.csv');
    const fileSizeInBytes = csvFile.size;
    let csvData = [];
    let headers = null;
    fs.createReadStream('./data.csv')
        .pipe(parse({ separator: ';' }))
        .on('data', (data) => csvData.push(data))
        .on('headers', (header) => headers = header)
        .on('end', () => {
        try {
            if (csvData.length > 0) {
                res.status(200).json({
                    status: true,
                    data: {
                        RowsCount: csvData.length,
                        FileSizeinBytes: fileSizeInBytes,
                        Headers: headers,
                    },
                    message: "CSV File Data",
                });
                next();
            }
            else {
                res.status(501).json({
                    status: false,
                    data: {},
                    message: "Error while reading CSV file.",
                });
                next();
            }
        }
        catch (error) {
            res.status(501).json({
                status: false,
                message: error,
            });
            next(error);
        }
    });
};
//# sourceMappingURL=homeController.js.map
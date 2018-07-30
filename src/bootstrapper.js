import React from 'react';
import ReactDOM from 'react-dom';

import AtdSuperTable from './index.js';

function onClick(e) {
    console.log(e);
    if(e.target.dataset.title) {
        e.preventDefault();
        console.log(e.target.dataset.title);
    }
}

ReactDOM.render(
    <AtdSuperTable onClick={onClick}>
        <table class="table">
            <thead>
            <tr>
                <th data-auto-lock>Source Auction</th>
                <th>Destination Auction</th>
                <th data-auto-lock>Year/Make/Model</th>
                <th>Volume</th>
                <th data-auto-lock>Src Retention</th>
                <th>Dest Retention</th>
                <th>Avg Src Est. Price</th>
                <th>Avg Dest Est. Price</th>
                <th>Est. Price Diff.</th>
                <th>Distance</th>
                <th data-auto-lock-rear>&nbsp;</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>Auction Atlanta</td>
                <td>Auction Nashville</td>
                <td>2014 Kia Sorento</td>
                <td>1</td>
                <td>96.00%</td>
                <td>99.10%</td>
                <td>$13,275</td>
                <td>$13,694</td>
                <td>$419</td>
                <td>213</td>     
                <td>
                <a href="#" data-title="2014 Kia Sorento" class="btn btn-inline btn-sm btn-primary">Select VINs</a>
                </td>
            </tr>

            <tr>
                <td>Auction Atlanta</td>
                <td>Auction Ohio</td>
                <td>2015 Kia Forte</td>
                <td>6</td>
                <td>96.80%</td>
                <td>102.80%</td>
                <td>$10,061</td>
                <td>$10,694</td>
                <td>$633</td>
                <td>440</td>
                <td>
                <a href="#" data-title="2015 Kia Forte" class="btn btn-inline btn-sm btn-primary">Select VINs</a>
                </td>
            </tr>

            <tr>
                <td>Auction Atlanta</td>
                <td>Auction Orlando</td>
                <td>2013 Hyundai Accent</td>
                <td>1</td>
                <td>95.10%</td>
                <td>101.00%</td>
                <td>$6,102</td>
                <td>$6,479</td>
                <td>$377</td>
                <td>389</td>
                <td>
                <a href="#" data-title="2013 Hyundai Accent" class="btn btn-inline btn-sm btn-primary">Select VINs</a>
                </td>
            </tr>

            <tr>
                <td>Auction Atlanta</td>
                <td>Auction Orlando</td>
                <td>2014 Hyundai Sonata</td>
                <td>4</td>
                <td>1</td>
                <td>99.40%</td>
                <td>$10,581</td>
                <td>$11,104</td>
                <td>$523</td>
                <td>389</td>
                <td>
                <a href="#" data-title="2014 Hyundai Sonata" class="btn btn-inline btn-sm btn-primary">Select VINs</a>
                </td>
            </tr>
            </tbody>
        </table>
    </AtdSuperTable>, 
    document.getElementById('root')
);
import {INote} from "../interfaces";

const helper = {
    formatDate: (date: string) => {
        const formatDate = new Date(date)
            .toDateString()
            .split(' ')
            .slice(-3)
            .join(' ');

        return formatDate.substring(0, formatDate.length - 5).concat(', ') + formatDate.substring(formatDate.length, formatDate.length - 4);
    },

    countStatus: (val: string, status: string, arr: INote[]) => {
        return arr.filter(item => item.noteStatus === status && item.category === val).length;
    },

//generates random id;
    guid: () => {
        let s4 = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    },

    getDate2Digits: (date: string[]) => {
        // '2022, 9, 25' => ['2022', '9', '25']
        const formatDate: string[] = [];
        date.forEach((item) => {
            if(item.length < 2){
                item = '0'.concat(item);
            }

            formatDate.push(item);
        })

        return formatDate;
    }
}

export {
    helper,
}

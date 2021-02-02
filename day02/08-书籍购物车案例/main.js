const app = new Vue({
    el: "#app",
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            }
        ]
    },

    methods: {
        getFinalPrice(price) {
            return '￥' + price.toFixed(2)
        },

        decrease(item) {
            item.count--
        },

        increase(item) {
            item.count++
        },

        remove(index) {
            this.books.splice(index, 1)
        }
    },

    computed: {
        totalPrice() {
            let totalPrice = 0;

            // 方法一、 for-in   i 是索引值
            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count
            // }


            // 方法二、 for-of   item 是value
            // for (const item of this.books) {
            //     totalPrice += item.price * item.count
            // }

            // 方法三 reduce
            totalPrice = this.books.reduce((prevalue, item) => {
                return prevalue + item.price * item.count
            }, 0)

            return totalPrice
        }
    },

    filters: {
        showFilter(price) {
            return '￥' + price.toFixed(2)
        }
    }

});


// 1. filter 中回调函数有一个要求： 必须返回一个boolean值
// true: 当返回true时，函数会自动将这次回调的n加入到一个新的数组中
// false: 当返回false时，函数内部会过滤掉这次的n
const nums = [10, 20, 111, 120, 300, 40, 50]

let newnums = nums.filter((n) => {
    return n < 100
})

console.log(newnums);

// 2. map 函数的使用
let new2nums = newnums.map((n) => {
    return n * 2
})
console.log(new2nums);

// 3. reduce 函数的使用
// reduce 作用对数组中的所有的内容进行汇总
// 第一次 prevalue = 0 ， n = 20
// 第二次 prevalue = 20， n = 40
// 第三次 prevalue = 60， n = 80
let total = new2nums.reduce((prevale, item) => {
    return prevale + item
}, 0)
console.log(total);

// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
// dall’interlocutore (bianco) assegnando due classi CSS diverse

// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome
// e immagine di ogni contatto

const app = new Vue({
    el: '#app',
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contactActive: 0,
        newMsg: '',
        searchText: '',
        bool: 'true',
        contacts: [
            {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
                }
            ],
            },

            {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
            ],
            },

            {
            name: 'Antonio',
            avatar: '_3',
            visible: true,
            messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
            ],
            },

            {
            name: 'Lorenzo',
            avatar: '_4',
            visible: true,
            messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
            ],
            },

            {
            name: 'Ciro',
            avatar: '_5',
            visible: true,
            messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
                }
            ],
            },
        ],

        newSent: {
            date: '',
            text: '',
            status: ''
        },
        newReceived: {
            date: '',
            text: '',
            status: ''
        }
    },

    methods:{
        setActive(indice){
            this.contactActive = indice;
            console.log(this.contactActive);
        },
        addMsg(){
            if (this.newMsg != 0) {
                const newMex = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                text: this.newMsg,
                status: 'sent'
                };
                this.contacts[this.contactActive].messages.push(newMex);
                this.newMsg = ''

                setTimeout(() => {
                    const newRisp = {
                        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        text: 'Ok.',
                        status: 'received'
                    };
                    this.contacts[this.contactActive].messages.push(newRisp);
                }, 1000);
            }
        },
        submitSearch(){
            // let a = 0;
            // this.searchText = this.searchText.charAt(0).toUpperCase() + this.searchText.slice(1);
            // console.log(this.searchText);
            // console.log(this.searchText.length);
            // console.log(this.searchResult);
            // if (this.searchText.length > 0) {
            //     for (let n = 0; n < this.searchText.length; n++){
            //         for (let i = 0; i < this.contacts.length; i++){
            //             for (let j = 0; j < this.contacts[i].name.length; j++){
            //                if (this.searchText[i] == this.contacts[i].name[j]) {
            //                    a++;
            //                }
            //             }
            //         if (a != this.searchText.length) {
            //             this.searchResult[i] = 10;
            //         }
            //         a = 0;
            //         }
            //     }
            // } else {
            //     for (let i = 0; i < this.contacts.length; i++){
            //         this.searchResult[i] = i;
            //     }
            // }

            nomi = ['Michele', 'Fabio', 'Antonio', 'Lorenzo', 'Ciro'];

            let i = 0;
            const str1 = this.searchText.toLowerCase();
                while ((i < nomi.length) || (this.bool != "true")){
                    const str2 = nomi[i].toLowerCase();
                    console.log(str2);
                    console.log(this.bool);
                    this.bool = str1.includes(str2);
                    i++;
                }
            
        }
    }
});
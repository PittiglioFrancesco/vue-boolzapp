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
        newMsg: "",
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

        newMessages: [{
            date: '20/03/2020 16:35:00',
            text: '',
            status: 'sent'
        }]
    },

    methods:{
        setActive(indice){
            this.contactActive = indice;
            console.log(this.contactActive);
        },
        addMsg(){
            this.newMsg = this.plusMsg;
            // alert(this.newMsg);
            this.newMessages.text = this.newMsg;
            // alert(this.newMessages.text);
            // console.log(this.newMessages.text);
            this.contacts[this.contactActive].messages.push(this.newMessages);
            let a = this;
            a.plusMsg = '';
            setTimeout(function(){
                a.newMessages.text = 'Ok.';
                a.newMessages.status = 'received';
                a.contacts[a.contactActive].messages.push(a.newMessages);
            }, 1000);
        },
        // okMsg(){
        //     this.newMessages.text = 'Ok.';
        //     this.newMessages.status = 'received';
        //     this.contacts[this.contactActive].messages.push(this.newMessages);
        // }
    }
});
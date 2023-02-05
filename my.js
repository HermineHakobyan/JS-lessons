let aSUEGB={
    director:"Petrosyan",
    assistant:"Lena",
    consultant:"Alyona",
    departmant:{
        coordinator:"Salnazaryan",
        operator1:"Mariam",
        operator2:"Harutunyan Mariam",
        operator3:"Laura"
    },
    tribune:{
        coordinatorTrib:"Galoyan",
        operatorTrib1:"Ofelya",
        operatorTrib2:"Qristine"
    },
    accountDepartment:{
        mainAccounter:"Minasyan",
        assistantAccount:"Luzia"
    },
    scientificDepartament:{
        coordinatorScient:"Sargsyan",
        assistantSient1:"Lusine",
        assistantSient2:"Samvel",
        assistantSient3:"Lilit"
    },
    lectureres:{
        doctorProfessors:{
            nameDoct1: "Toroyan Vasak",
            nameDoct2:"Martirosyan Narek",
            nameDoct3:"Avetisyan Andre"
        },
        assositeProfessors:{
            nameAssosiate1:"Hermine Hakobyan",
            nameAssosiate2:"Gayane Salnazaryan",
            nameAssosiate3:"Gharib Harutyunayan",
            nameAssosiate4:"Karen Petrosyan",
            nameAssosiate5:"Lusya Galoyan "
        },
        pHD:{
            namePhd1:"Armine Gareginyan",
            namePhd2:"Arpine Sargsyan",
            namePhd3:"Vladimir Sargsyan"
        },

        aspirants:{
            nameAsp1:"Valentina Miqaelyan",
            nameAsp2:"Roza Kurghinyan",
            nameAsp3:"Harutunyan Mariam",
            nameAsp4:"and others"
        }

    }

};

let aSUEGBnewCordinator=JSON.parse(JSON.stringify(aSUEGB));
aSUEGBnewCordinator.departmant.coordinator="Vardanyan";
console.log(aSUEGBnewCordinator.departmant);
console.log(aSUEGB.departmant);

let addNewMemeber={ ...aSUEGB.aspirants, nameAsp5:"Lilit Avetisyan"};
console.log(aSUEGB, addNewMemeber);

// let addNewAspirant=Object.assign({}, aSUEGB.aspirants, { nameAsp5:"Lilit Avetisyan"});
// console.log(aSUEGB, addNewMemeber.aspirants);

//console.log(aUEGB.departmant.coordinator);

function directorate(director,assistant,consultant){
    return{
        director,
        assistant,
        consultant
    }
}
function departmant(coordinator,operator1,operator2,operator3){
    return{
        coordinator,
        operator1,
        operator2,
        operator3
    }
}

function tribune(coordinatorTrib,operatorTrib1,operatorTrib2){
    return{
        coordinatorTrib,
        operatorTrib1,
        operatorTrib2
    }
}
function accountDepartment(mainAccounter,assistantAccount){
    return{
        mainAccounter,
        assistantAccount
    }
}
function scientificDepartament(coordinatorScient, assistantSient1, assistantSient2, assistantSient3){
    return{
        coordinatorScient,
         assistantSient1, 
         assistantSient2, 
         assistantSient3
    }
}
function lectureres (doctorProfessors, assositeProfessors,pHD,aspirants){
    return{
        doctorProfessors, 
        assositeProfessors,
        pHD,
        aspirants
    }
}
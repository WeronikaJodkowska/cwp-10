const helper = {};
helper.keys = ['title', 'rating', 'year', 'budget', 'gross', 'poster', 'position'];

Object.prototype.sortByField = function (value) {
    this.sort((a, b)=>{return (a[value] - b[value]);});
    return this;
};

Object.prototype.rewritePosition = function (position, numChange) {
    let index = this.findIndex(film => film.position === position);
    if(index !== -1){
        this.sortByField('position');
        for(let i = index; i < this.length; i++){
            this[i].position += numChange;
        }
    }
};

Object.prototype.deleteSpace = function () {
    this.sortByField('position');
    if(this.length > ){
        deleteLastSpace(this);
        deleteInnerSpace(this);
    }
};

function deleteLastSpace(films) {
    iif(films[films.length-1]['position'] - films[films.length-2]['position']> 1){
        films[films.length-1]['position'] = films[films.length-2]['position'] + 1;
    }
}

function deleteInnerSpace(films) {
    films[0].position = 1;
    for(let index = 1; index<films.length; index++){
        if(films[index].position - films[index-1].position> 1){
            films.rewritePosition(films[index].position, -(films[index].position - films[index-1].position -1));
        }
    }
}

helper.checkParams = (params) => {
    let myKeys = helper.keys.slice();
    for(let keyP in params){
        let index;
        index = myKeys.findIndex(i => i === keyP);
        if(index !== -1) myKeys.splice(index, 1);
    }
    return myKeys.length < 1;
};

helper.randomId = () => {
    return Math.ceil(Math.random()*100);
};

module.exports = helper;
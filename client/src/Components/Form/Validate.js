export default function validate (input) {
    let errors = {};

    if(!/^[a-z ,A-Z.'-]+$/.test(input.name)){
        errors.name = 'Se requiere Nombre'
    }
    if(!input.height){
        errors.height = "se requiere altura min - max"
    }
    if(!/^\d{2} - \d{2}$/.test(input.height)){
        errors.height = "Formato 00 - 00"
    }
    if(!input.weight){
        errors.weight = "Se requiere peso min - max"
    }
    if(!/^\d{2} - \d{2}$/.test(input.weight)){
        errors.weight = "Formato 00 - 00"
    }
    if(!input.lifeSpan){
        errors.lifeSpan = "Se requiere edad min - max"
    }
    if(!/^\d{2} - \d{2}$/.test(input.lifeSpan)){
        errors.lifeSpan = "Formato 00 - 00"
    }
    if(!/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/.test(input.image)) {
        errors.image = "Se requiere formato de URL con HTTPS"
    }
    if(!input.image){
        errors.image = 'Se requiere Imagen';
    }
    return errors;
  }
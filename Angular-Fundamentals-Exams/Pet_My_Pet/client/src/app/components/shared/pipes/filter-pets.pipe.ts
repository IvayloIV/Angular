import { Pipe, PipeTransform } from '@angular/core';
import { PetDetails } from 'src/app/core/models/pet/pet-details';

@Pipe({ name: 'filterPets' })
export class FilterPetsPipe implements PipeTransform {
    transform(value: PetDetails[], category: string) {
        const userId = sessionStorage.getItem('userId');

        if (category) {
            value = value.filter(a => a.category === category);
        }

        return value.filter(a => a._acl.creator !== userId).sort((a, b) => Number(b.likes) - Number(a.likes));
    }
}
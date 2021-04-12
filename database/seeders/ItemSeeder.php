<?php

namespace Database\Seeders;

use App\Models\Item;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
         $objects = ["Casettes","Coffre_Fort", "Jukebox","Lecteur", "Radio", "Ramdam"] ;

         for ($item=0; $item < count($objects); $item++){
             foreach ($objects as $object) {
                 $object = new Item();
                 $object->name = $objects[$item];
                 $object->image = "./resources/game/objects/image/room1/".$objects[$item]."_00/".$objects[$item]."_0".($item + 1).".png";
                 $object->audio = "./resources/game/objects/audio/room1/".$objects[$item]."_00/".$objects[$item]."_0".($item + 1).".mp3";

                 $object->save();
                 $item+=1;
             }
         }
    }
}

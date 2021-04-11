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
         $objects = [["Coffre_Fort",1]];

         for ($item=0; $item < count($objects); $item++){
             foreach ($objects as $object) {
                 $object = new Item();
                 $object->name = $objects[$item][0];
                 $object->room = $objects[$item][1];

                 $object->image = "./resources/game/objects/image/room".$objects[$item][1]."/".$objects[$item][0]."_0".($item + 1).".png";
                 $object->audio = "./resources/game/objects/audio/room".$objects[$item][1]."/".$objects[$item][0]."_0".($item + 1).".mp3";

                 $object->save();
                 $item+=1;
             }
         }
    }
}

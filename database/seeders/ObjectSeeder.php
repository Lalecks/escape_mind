<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ObjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
         $objects = ['radio', 'cassette', "cassette2", "test"];

         for ($item=0; $item < count($objects); $item++){
             foreach ($objects as $object) {
                 $object = new \App\Models\Object();
                 $object->name = $objects[$item];
                 if($item<9){
                     $object->image = "image_".$objects[$item]."_0".($item + 1).".svg";
                     $object->audio = "audio_".$objects[$item]."_0".($item + 1).".mp3";
                 }else{
                     $object->img = "image_".$objects[$item]."_".($item + 1).".svg";
                     $object->audio = "image_".$objects[$item]."_".($item + 1).".mp3";
                 }
                 $object->save();
                 $item+=1;
             }
         }
    }
}

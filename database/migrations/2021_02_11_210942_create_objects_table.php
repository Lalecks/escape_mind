<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('objects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->tinyInteger('room')->default(0);
            $table->string('image')->default("https://forums.autodesk.com/t5/image/serverpage/image-id/360677iEC67ACD627FBBDDF/image-size/large?v=1.0&px=999");
            $table->string('audio')->default(NULL);
            $table->tinyInteger('used')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('objects');
    }
}

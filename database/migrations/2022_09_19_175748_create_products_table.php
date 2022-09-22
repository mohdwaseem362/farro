<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description');
            $table->string('summary');
            $table->string('image');
            $table->date('date')->nullable();
            $table->date('date_modified')->nullable();
            $table->integer('categories_id')->nullable();
            $table->string('tag_id')->nullable();
            $table->longText('review_id')->nullable();
            $table->integer('stock')->nullable();
            $table->integer('weight')->nullable();
            $table->string('dimensions')->nullable();
            $table->integer('price');
            $table->integer('offer')->nullable();
            $table->string('coupons')->nullable();
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
        Schema::dropIfExists('products');
    }
}

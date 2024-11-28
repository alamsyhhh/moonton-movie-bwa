<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/embed/tgbNymZ7vqY',
                'thumbnail' => 'https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg',
                'rating' => 9.3,
                'is_featured' => 1
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Fantasy',
                'video_url' => 'https://www.youtube.com/embed/tgbNymZ7vqY',
                'thumbnail' => 'https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg',
                'rating' => 9.2,
                'is_featured' => 0
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/embed/tgbNymZ7vqY',
                'thumbnail' => 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
                'rating' => 9.1,
                'is_featured' => 0
            ]
            ];
            Movie::insert($movies);
    }
}

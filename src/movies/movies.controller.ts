import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {

  constructor(private readonly moviesServiece: MoviesService) { }

  @Get()
  getAll() {
    return this.moviesServiece.getAll();
  }

  @Get("/:id")
  getOnd(@Param("id") movieId: number) {
    return this.moviesServiece.getOne(movieId);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto) {
    return this.moviesServiece.create(movieData)
  }

  @Delete(":id")
  deleteMovieOne(@Param("id") movieId: number) {
    return this.moviesServiece.deleteOne(movieId)
  }

  @Patch(":id")
  updateMovieOne(@Param('id') movieId:number, @Body() updateData: UpdateMovieDto) {
    this.moviesServiece.update(movieId, updateData)
  }
}

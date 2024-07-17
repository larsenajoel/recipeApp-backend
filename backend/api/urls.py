from django.urls import path
from . import views



urlpatterns = [
    path("recipes/", views.RecipeListCreate.as_view(), name="recipe-list"),
    path("recipes/delete/<int:pk>/", views.RecipeDelete.as_view(), name = "delete-recipe"),
]
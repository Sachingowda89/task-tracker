import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const fetchTasks = createAsyncThunk("tasks/fetch", async () => {
  const res = await api.get("/tasks");
  return res.data;
});

export const createTask = createAsyncThunk("tasks/create", async (data) => {
  const res = await api.post("/tasks", data);
  return res.data;
});

export const updateTask = createAsyncThunk("tasks/update", async ({ id, updates }) => {
  const res = await api.patch(`/tasks/${id}`, updates);
  return res.data;
});

export const deleteTask = createAsyncThunk("tasks/delete", async (id) => {
  await api.delete(`/tasks/${id}`);
  return id;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { items: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const i = state.items.findIndex((t) => t._id === action.payload._id);
        if (i >= 0) state.items[i] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t._id !== action.payload);
      });
  }
});

export default tasksSlice.reducer;
